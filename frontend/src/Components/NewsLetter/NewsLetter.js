import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      {/* Heading for the newsletter section */}
      <h1>Get Exclusive Offers On Your Email</h1>
      {/* Subheading to encourage users to subscribe */}
      <p>Subscribe to our newsletter and stay updated</p>
      {/* Input field for email and subscribe button */}
      <div>
        <input type="email" placeholder="enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
