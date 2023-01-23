import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="text-white text-xl font-semibold bg-mainBlack">
      <div className="flex justify-between items-center py-3 px-12 max-w-6xl mx-auto">
        <nav>
          <Link to="/mentions-legales" className="hover:text-mainDarkBrown">
            {t("legalPage.title")}
          </Link>
        </nav>
        <a
          href="https://www.instagram.com/champagnechalerouxghys/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mainDarkBrown"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
}
