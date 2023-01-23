import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function LegalPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="py-20 space-y-20 px-12 max-w-6xl mx-auto">
        <article className="space-y-8">
          <h2>{t("legalPage.editor.title")}</h2>
          <p>
            {t("legalPage.editor.address")}
            <br />
            SIRET : 38136642600017
            <br />
            Code APE : 0121Z TVA : FR04381366426
            <br />
            {t("legalPage.editor.phoneNumber")}
            <br />
            {t("legalPage.editor.mail")}
            <br />
            {t("legalPage.editor.chief")}
          </p>
        </article>
        <article className="space-y-8">
          <h2>{t("legalPage.hosting.title")}</h2>
          <p>
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
          </p>
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
