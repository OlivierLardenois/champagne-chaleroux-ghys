import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  const { t } = useTranslation();

  const ADDRESS = "10 Rue des Gris, 51190 Avize";
  const EMAIL = "earl.ghys@wanadoo.fr";
  const PHONE_NUMBER = "06 48 71 50 64";

  return (
    <Layout>
      <ParallaxBanner className="h-[32rem]">
        <ParallaxBannerLayer speed={-20}>
          <StaticImage
            src="../images/hero.jpg"
            alt=""
            layout="fullWidth"
            className="h-[46rem]"
          />
        </ParallaxBannerLayer>
        <div className="absolute inset-0 flex flex-col justify-center px-12 max-w-6xl mx-auto">
          <h1 className="w-1/2 mb-10">{t("homePage.hero.title")}</h1>
          <p className="w-1/2 text-white text-lg font-medium">
            {t("homePage.hero.text")}
          </p>
        </div>
      </ParallaxBanner>
      <section className="space-y-20 py-20 px-12 max-w-6xl mx-auto">
        <article className="space-y-8">
          <h2>{t("homePage.presentation.title")}</h2>
          <div className="space-y-6">
            {(
              t("homePage.presentation.text", {
                returnObjects: true,
              }) as string[]
            ).map((p) => (
              <p>{p}</p>
            ))}
          </div>
        </article>
        <article className="space-y-8">
          <h2>{t("homePage.contact.title")}</h2>
          <div className="flex space-x-10">
            <StaticImage
              src="../images/family.jpg"
              alt=""
              className="rounded-lg flex-shrink-0 w-96"
            />
            <div className="flex flex-col items-center space-y-6">
              <p>{t("homePage.contact.text")}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/kuQhNUTh4LGPJDn48"
                className="card"
              >
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  size="3x"
                  className="mb-2"
                />
                {ADDRESS}
              </a>
              <a href={`tel:+${PHONE_NUMBER}`} className="card">
                <FontAwesomeIcon icon={faPhone} size="3x" className="mb-2" />
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="card">
                <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-2" />
                {EMAIL}
              </a>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

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
