import React from "react";

import classes from "./Banner.module.css";

export const Banner = () => {
  return null; (
    <div className={classes["banner"]}>
      <a
        href="https://me-qr.com/Sh4sSAyq"
        target="blank"
        className={classes["banner-content"]}
      >
        <img
          src="/whatsapp-logo.png"
          alt="WhatsApp Logo"
          width="22.5"
          height="20"
          style={{ borderRadius: "10%" }}
        />
        <span className={classes["banner-text-mobile"]}>
          Konsultasi Lewat WhatsApp
        </span>
        <span className={classes["banner-text"]}>
          Konsultasi Lewat WhatsApp
        </span>
      </a>
    </div>
  );
};
