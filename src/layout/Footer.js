import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__content"]}>
        <div className={classes["footer__inner-content"]}>
          <p className={classes["footer__text"]}>
          Follow me to be updated on design best practices that will help you grow and improve every day.
          </p>
          <div className={classes["social-icons"]}>


  <a href="https://www.instagram.com/sghngrh" target="_blank">
    <img src="/instagram-icon.png" alt="Instagram" width="32" height="32" />
  </a>

  <a href="https://www.linkedin.com/in/moch-sugih-nugraha/" target="_blank">
    <img src="linkedin-logo.png" alt="LinkedIn" width="32" height="32" />
  </a>

  <a href="https://wa.me/+6285926270826" target="_blank">
    <img src="/wa-log.png" alt="WhatsApp" width="32" height="32" />
  </a>

</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
