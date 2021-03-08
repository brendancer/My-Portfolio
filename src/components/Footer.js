import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return <div className='icons-list'>
    <a
      className="faLinkedin app-link social-media-list"
      href="https://www.linkedin.com/in/brendagoodwin23/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a
      className="faGithub app-link social-media-list"
      href="https://github.com/brendancer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a
      className="faFacebook app-link social-media-list"
      href="https://www.facebook.com/brenda.goodwin.169"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
  </div>
}
export default Footer;