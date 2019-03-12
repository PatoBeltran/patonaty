declare module '@mars/heroku-js-runtime-env' {
    const content: any;
    export default content;
}

interface GuestsList {
    [urlPath: string]: GuestMetadata;
}

interface GuestMetadata {
    name: string;
    id: string;
    pronoun: 'he' | 'she';
    status: 'attending' | 'declined' | 'unconfirmed';
    plusOne?: GuestMetadata;
}