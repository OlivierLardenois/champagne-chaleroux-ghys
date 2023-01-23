import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-20 space-y-20 max-w-6xl mx-auto">
        <article className="flex bg-mainBlack rounded-xl text-white">
          <StaticImage
            src="../images/brut.jpg"
            alt=""
            className="shrink-0 w-80 h-96 rounded-l-xl"
          />
          <div className="space-y-6 p-8">
            <h2>{t("productsPage.champagnes.brut.title")}</h2>
            <p>{t("productsPage.champagnes.brut.text")}</p>
          </div>
        </article>
        <article className="flex bg-mainBlack rounded-xl text-white">
          <div className="space-y-6 p-8">
            <h2>{t("productsPage.champagnes.millesime.title")}</h2>
            <p>{t("productsPage.champagnes.millesime.text")}</p>
          </div>
          <StaticImage
            src="../images/millesime.jpg"
            alt=""
            className="shrink-0 w-80 h-96 rounded-r-xl"
          />
        </article>
        <article className="flex bg-mainBlack rounded-xl text-white">
          <StaticImage
            src="../images/rose.jpg"
            alt=""
            className="shrink-0 w-80 h-96 rounded-l-xl"
          />
          <div className="space-y-6 p-8">
            <h2>{t("productsPage.champagnes.rose.title")}</h2>
            <p>{t("productsPage.champagnes.rose.text")}</p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;

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
