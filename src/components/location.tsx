import * as React from "react";

interface IMap {
    location: "ceremony" | "reception"
}

export const Map = ({ location }: IMap) => (
    <div className="location-map-container">
        <iframe 
            src={mapUrl[location]}
            width="100%" 
            height="100%"
            frameBorder="0">
        </iframe>
    </div>
);

const mapUrl = {
    ceremony: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.374259032267!2d-122.32328574895263!3d47.6188557790834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab92810c111%3A0x74c5d0fe777959fd!2s101+Broadway%2C+Seattle%2C+WA+98122!5e0!3m2!1sen!2sus!4v1552177656683",
    reception: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.685557043497!2d-122.3227213846013!3d47.6128035955431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906acc07f09b89%3A0xaec46580d07fc936!2sOptimism+Brewing+Company!5e0!3m2!1sen!2sus!4v1551688778233" 
}