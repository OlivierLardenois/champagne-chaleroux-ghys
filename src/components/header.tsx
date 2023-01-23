import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";

const Pages = [
  { key: "homePage.title", to: "/" },
  { key: "productsPage.title", to: "/nos-champagnes/" },
  { key: "galleryPage.title", to: "/galerie/" },
];

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex lg:hidden">
      <div
        className="space-y-2 cursor-pointer z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`block w-8 h-0.5 bg-white duration-500 ${
            isMenuOpen && "rotate-45 translate-y-[10px]"
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white duration-500 ${
            isMenuOpen && "opacity-0"
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white duration-500 ${
            isMenuOpen && "-rotate-45 -translate-y-[10px]"
          }`}
        ></span>
      </div>
      <div>
        <div
          className={`fixed inset-0 z-10 bg-mainBlack h-screen transition-transform ease-in-out duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          coucou
        </div>
      </div>
    </div>
  );
};

const HeadersLinks = () => {
  const { languages, language, originalPath, t } = useI18next();

  return (
    <nav className="hidden lg:flex space-x-12">
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
  );
};

export default function Header() {
  return (
    <header className="text-white text-xl font-semibold bg-mainBlack">
      <div className="flex justify-between items-center py-3 px-12 max-w-6xl mx-auto">
        <Link to="/">
          <StaticImage src="../images/logo.png" alt="" className="h-14 w-14" />{" "}
        </Link>
        <HeadersLinks />
        <HamburgerMenu />
      </div>
    </header>
  );
}
