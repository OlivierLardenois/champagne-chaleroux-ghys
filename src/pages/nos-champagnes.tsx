import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <Layout pageKey="productsPage" pathname={location.pathname}>
      <section className="space-y-20 custom-container">
        <h1 className="text-center">{t("productsPage.title")}</h1>
        <article className="flex flex-col sm:flex-row bg-mainBlack rounded-xl text-white">
          <StaticImage
            src="../images/brut.jpg"
            alt={t("productsPage.champagnes.brut.alt")}
            className="shrink-0 sm:w-80 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl"
          />
          <div className="space-y-6 p-8">
            <h2 className="text-center sm:text-start">
              {t("productsPage.champagnes.brut.title")}
            </h2>
            <p>{t("productsPage.champagnes.brut.text")}</p>
          </div>
        </article>
        <article className="flex flex-col sm:flex-row bg-mainBlack rounded-xl text-white">
          <div className="space-y-6 p-8 order-2 sm:order-1">
            <h2 className="text-center sm:text-start">
              {t("productsPage.champagnes.millesime.title")}
            </h2>
            <p>{t("productsPage.champagnes.millesime.text")}</p>
          </div>
          <StaticImage
            src="../images/millesime.jpg"
            alt={t("productsPage.champagnes.millesime.alt")}
            className="shrink-0 sm:w-80 rounded-t-xl sm:rounded-tl-none sm:rounded-r-xl order-1 sm:order-2"
          />
        </article>
        <article className="flex flex-col sm:flex-row bg-mainBlack rounded-xl text-white">
          <StaticImage
            src="../images/rose.jpg"
            alt={t("productsPage.champagnes.rose.alt")}
            className="shrink-0 sm:w-80 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl"
          />
          <div className="space-y-6 p-8">
            <h2 className="text-center sm:text-start">
              {t("productsPage.champagnes.rose.title")}
            </h2>
            <p>{t("productsPage.champagnes.rose.text")}</p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
