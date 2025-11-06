import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import AgeVerificationBanner from "./ageVerificationBanner";
import CookieBanner from "./cookieBanner";
import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";

type LayoutProps = {
  pageKey: string;
  pathname: string;
  children?: React.ReactNode;
};

export default function Layout({ pageKey, pathname, children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isMenuOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <AgeVerificationBanner />
      <Seo
        title={t(`${pageKey}.seo.title`)}
        description={t(`${pageKey}.seo.description`)}
        pathname={pathname}
      />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="relative grow">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
