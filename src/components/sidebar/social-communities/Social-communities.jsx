import React from "react";
import "./Social-communities.css";

const SocialCommunities = () => {
  return (
    <div className="socialicons-container flex">
      <ul className="socialicons flex">
        <li className="socialiconitem">
          <div>
            <a href="https://www.facebook.com" className="socialiconlink flex">
              <i className="fi fi-brands-facebook"></i>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com" className="socialiconlink flex">
              <i className="fi fi-brands-behance"></i>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com" className="socialiconlink flex">
              <i className="fi fi-brands-linkedin"></i>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com" className="socialiconlink flex">
              <i className="fi fi-brands-github"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SocialCommunities;
