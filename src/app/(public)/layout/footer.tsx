import React from "react";
import styles from "./Footer.module.scss";
import { FaLinkedinIn, FaDiscord, FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <section className={styles["footer__copyright"]}>
        <p className={styles["footer__message"]}>
          © 2024 Workshopify, Inc. All rights reserved.
        </p>
        <div className={styles["footer__social-icons"]}>
          <FaLinkedinIn />
          <FaGithub />
          <FaDiscord />
          <FaFacebookF />
        </div>
      </section>
    </footer>
  );
}
