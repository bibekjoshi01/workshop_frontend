"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "@/assets/logo.svg";
import ProfileIcon from "@/assets/profile.jpg";
import { IoNotifications } from "react-icons/io5";

export default function Header() {
  const [isLogged, setIsLogged] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={styles["header"]}>
      <section className={styles["header_lg_container"]}>
        <div className={styles["header_left"]}>
          <Link href="#" className={styles["header__logo"]}>
            <Image src={Logo} alt="Site logo" width={300} height={300} />
          </Link>
          <nav className={`${styles["header__nav"]} ${styles["main-nav"]}`}>
            <ul className={styles["main-nav__list"]}>
              <li className={styles["main-nav__item"]}>
                <Link href="#" className={styles["main-nav__link"]}>
                  Events
                </Link>
              </li>
              <li className={styles["main-nav__item"]}>
                <Link href="#" className={styles["main-nav__link"]}>
                  About Us
                </Link>
              </li>
              <li className={styles["main-nav__item"]}>
                <Link href="#" className={styles["main-nav__link"]}>
                  Hackathons
                </Link>
              </li>
              <li className={styles["main-nav__item"]}>
                <Link href="#" className={styles["main-nav__link"]}>
                  Projects
                </Link>
              </li>
              <li className={`${styles["main-nav__item"]} ${styles["button"]}`}>
                <Link href="#" className={styles["main-nav__link"]}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {isLogged ? (
          <div className={styles["header__actions"]}>
            <button
              className={`${styles["header-actions__item"]} ${styles["signin"]}`}
            >
              <span className="material-icons">Log in</span>
            </button>
            <button
              className={`${styles["header-actions__item"]} ${styles["signup"]}`}
            >
              <span className="material-icons">Sign up</span>
            </button>
          </div>
        ) : (
          <div
            className={`${styles["header-logged-in__actions"]} ${styles["logged-in"]}`}
          >
            <div className={`${styles["notification"]}`}>
              <IoNotifications />
            </div>
            <div className={`${styles["profile"]}`}>
              <Image
                onClick={toggleModal}
                src={ProfileIcon}
                alt="profile image"
                width={30}
                height={30}
              />
              {isModalOpen && (
                <div className={styles.modal}>
                  <ul>
                    <li>My Profile</li>
                    <li>Settings</li>
                    <li>Help</li>
                    <li>Log out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </header>
  );
}
