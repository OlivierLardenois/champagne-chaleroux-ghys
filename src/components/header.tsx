import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";

const Pages = [
  { key: "homePage.title", to: "/" },
  { key: "productsPage.title", to: "/nos-champagnes/" },
  { key: "galleryPage.title", to: "/galerie/" },
];

type HamburgerMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
};

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) => {
  const { languages, language, originalPath, t } = useI18next();

  return (
    <div className="flex lg:hidden z-10">
      <div
        className={`${
          isMenuOpen ? "fixed right-12 top-[1.8rem]" : ""
        } z-10 space-y-2 cursor-pointer`}
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
      <nav
        className={`fixed inset-0 bg-mainBlack h-screen transition-transform ease-in-out duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-between items-center text-center py-20 px-12 h-full text-4xl">
          {Pages.map((page) => (
            <li key={page.key} className="hover:text-mainDarkBrown">
              <Link to={page.to}>{t(page.key)}</Link>
            </li>
          ))}
          <li>
            <span>
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
            <span>
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
          </li>
        </ul>
      </nav>
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
        <li>
          <span>
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
          <span>
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
        </li>
      </ul>
    </nav>
  );
};

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
};

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="text-white text-xl font-semibold bg-mainBlack">
      <div className="flex justify-between items-center py-3 px-12 max-w-6xl mx-auto">
        <Link to="/">
          <StaticImage src="../images/logo.png" alt="" className="h-14 w-14" />{" "}
        </Link>
        <HeadersLinks />
        <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
