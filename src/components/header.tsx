import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

export default function Header() {
  const { languages, originalPath } = useI18next();
  return (
    <header>
      <ul>
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
