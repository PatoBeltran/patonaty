const crypto = require('crypto');
const https = require("https");
const url = require('url');
require('dotenv').config();

const lists = {
    unconfirmed: "5c7cb8737a02455b12d4d7b3",
    attending: "5c7cb87958dd6a13b55d3d62",
    declined: "5c7cb87b540ca621a484809b"
};

const TRELLO_KEY = process.env.TRELLO_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const trelloURL="https://api.trello.com/1";

const fetch = async (requestUrl, params = { method: 'GET' }, data = {}) => {
    const urlForReq = new url.URL(requestUrl)

    return new Promise((resolve) => {
        const req = https.request({ hostname: urlForReq.hostname, path: urlForReq.pathname + urlForReq.search,...params }, res => {
            res.setEncoding("utf8");
            let body = "";

            res.on("data", data => {
                body += data;
            });

            res.on("end", () => {
                body = JSON.parse(body);
                resolve(body)
            });
        });

        if (data) {
            req.write(JSON.stringify(data));
            req.end();
        }
    });
}

const getCardsForList = async (id) => {
    const boardUrl = trelloURL + "/lists/" + id + "/cards?key=" + TRELLO_KEY + "&token=" + TRELLO_TOKEN + "&fields=id,name";
    
    try {
        const data=await fetch(boardUrl);
        return data.map(d => ({id: d.id,name: d.name}));
    }
    catch(err) {
        console.log(err);
    }
}

const parseBoardCards = (data) => {
    let cards_json = {};
    data.forEach((card) => {
        const hash = crypto.createHash('sha256')
                            .update(card.name)
                            .digest('hex');

        const url = hash.substring(0, 7);

        cards_json[url] = { name: card.name, id: card.id };
    });

    return cards_json;
}

const github = async (method, resource, data={}) => {
    const resource_url = `https://api.github.com/repos/patobeltran/patonaty/git/${resource}`;
    
    const fetch_params = {
        method: method,
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'User-Agent': 'patonaty wed'
        } 
    };

    if (data) {
        fetch_params.headers['Accept'] = 'application/json';
        fetch_params.headers['Content-Type'] = 'application/json';
    }
    
    console.log(data);

    return await fetch(resource_url, fetch_params, data);
}

const main = async () => {
    const rawUnconfirmed = await getCardsForList(lists.unconfirmed);
    const rawAttending = await getCardsForList(lists.attending);
    const rawDeclined = await getCardsForList(lists.declined);

    const unconfirmed = parseBoardCards(rawUnconfirmed);
    const attending = parseBoardCards(rawAttending);
    const declined = parseBoardCards(rawDeclined);

    const allGuests = Object.assign({}, unconfirmed, attending, declined);

    const branch = await github('GET', "refs/heads/master");
    const last_commit_sha = branch['object']['sha'];

    const last_commit = await github('GET', `commits/${last_commit_sha}`);
    const last_tree_sha = last_commit['tree']['sha'];

    const new_content_tree = await github('POST', 'trees', {
        base_tree: last_tree_sha,
        tree: [{ 
            path: 'src/assets/list.json',
            content: JSON.stringify(allGuests, null, 2),
            mode: '100644',
            type: 'blob'
        }]
    });

    const new_content_tree_sha = new_content_tree['sha'];
    const new_commit = await github('POST', 'commits', {
        parents: [last_commit_sha],
        tree: new_content_tree_sha,
        message: 'Updated list from trello'
    });

    const new_commit_sha = new_commit['sha'];
    await github('PATCH', "refs/heads/master", { sha: new_commit_sha });
}

main();