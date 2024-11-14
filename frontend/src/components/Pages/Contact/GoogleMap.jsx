import React from "react";

export default function GoogleMap() {
  return (
    <div className="h-[50vh] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.258661194466!2d90.46859227604224!3d23.702455378703128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7c3bfa13ac9%3A0x4f73d86e0eea61c1!2sShamsul%20Hoque%20Khan%20School%20%26%20College%2C%20College%20Campus!5e0!3m2!1sen!2sbd!4v1731539260029!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
