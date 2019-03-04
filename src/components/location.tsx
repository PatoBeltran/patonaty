import * as React from "react";

export const Location = ({ }) => {
    return (
        <div className="location-map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.685557043497!2d-122.3227213846013!3d47.6128035955431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906acc07f09b89%3A0xaec46580d07fc936!2sOptimism+Brewing+Company!5e0!3m2!1sen!2sus!4v1551688778233"
                width="100%" 
                height="100%"
                frameBorder="0">
            </iframe>
        </div>
    );
};