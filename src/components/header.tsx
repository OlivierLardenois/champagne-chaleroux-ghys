import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

const Pages = [
  { key: "homePage.title", to: "/" },
  { key: "productsPage.title", to: "/nos-champagnes/" },
  { key: "galleryPage.title", to: "/galerie/" },
];

export default function Header() {
  const { languages, originalPath, t } = useI18next();

  return (
    <header className="text-white text-xl font-semibold bg-mainBlack">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <StaticImage src="../images/logo.png" alt="" className="h-14 w-14" />
        <nav>
          <ul className="flex space-x-8">
            {Pages.map((page) => (
              <li key={page.key}>
                <Link to={page.to}>{t(page.key)}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
