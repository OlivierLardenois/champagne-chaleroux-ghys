import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

const Pages = [
  { key: "homePage.title", to: "/" },
  { key: "productsPage.title", to: "/nos-champagnes/" },
  { key: "galleryPage.title", to: "/galerie/" },
];

const LanguageSwitcher = () => {
  const { languages, language, originalPath } = useI18next();

  return (
    <>
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
    </>
  );
};

type HamburgerMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
};

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) => {
  const { t } = useTranslation();

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
        <div className="flex justify-center items-center h-full">
          <ul className="flex flex-col justify-between h-full max-h-[32rem] text-center text-4xl p-6">
            {Pages.map((page) => (
              <li key={page.key} className="hover:text-mainDarkBrown">
                <Link to={page.to}>{t(page.key)}</Link>
              </li>
            ))}
            <li key={"LanguageSwitcher"}>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const HeadersLinks = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:flex space-x-12">
      <ul className="flex space-x-6">
        {Pages.map((page) => (
          <li key={page.key} className="hover:text-mainDarkBrown">
            <Link to={page.to}>{t(page.key)}</Link>
          </li>
        ))}
        <li key="LanguageSwitcher">
          <LanguageSwitcher />
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
  const { t } = useTranslation();

  return (
    <header className="text-white text-xl font-semibold bg-mainBlack">
      <div className="flex justify-between items-center py-3 px-12 max-w-6xl mx-auto">
        <Link to="/">
          <StaticImage
            src="../images/logo.png"
            alt={t("header.logoAlt")}
            className="h-14 w-14"
          />
        </Link>
        <HeadersLinks />
        <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
