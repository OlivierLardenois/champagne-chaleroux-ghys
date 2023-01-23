import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

const Pages = [
  { key: "homePage.title", to: "/" },
  { key: "productsPage.title", to: "/nos-champagnes/" },
  { key: "galleryPage.title", to: "/galerie/" },
];

export default function Header() {
  const { languages, language, originalPath, t } = useI18next();

  return (
    <header className="text-white text-xl font-semibold bg-mainBlack">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to="/">
          <StaticImage src="../images/logo.png" alt="" className="h-14 w-14" />{" "}
        </Link>
        <nav className="flex space-x-12">
          <ul className="flex space-x-6">
            {Pages.map((page) => (
              <li key={page.key} className="hover:text-mainDarkBrown">
                <Link to={page.to}>{t(page.key)}</Link>
              </li>
            ))}
          </ul>
          <div>
            <span key={languages[0]}>
              <Link
                to={originalPath}
                language={languages[0]}
                className={`${
                  language === languages[0]
                    ? "text-mainBrown cursor-default"
                    : "hover:text-mainDarkBrown"
                }`}
              >
                {languages[0].toUpperCase()}
              </Link>
            </span>
            <span> / </span>
            <span key={languages[1]}>
              <Link
                to={originalPath}
                language={languages[1]}
                className={`${
                  language === languages[1]
                    ? "text-mainBrown cursor-default"
                    : "hover:text-mainDarkBrown"
                }`}
              >
                {languages[1].toUpperCase()}
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
