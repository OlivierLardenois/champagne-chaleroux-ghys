import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>ProductsPage</h1>
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
