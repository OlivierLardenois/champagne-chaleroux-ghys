import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Layout from "../components/layout";

/** TODO
 * cookie banner GA4
 */

export default function HomePage({ location }: PageProps) {
  const { t } = useTranslation();

  const ADDRESS = "10 Rue des Gris, 51190 Avize";
  const EMAIL = "earl.ghys@wanadoo.fr";
  const PHONE_NUMBER = "06 48 71 50 64";

  return (
    <Layout pageKey="homePage" pathname={location.pathname}>
      <ParallaxBanner className="h-[92vh] sm:h-[32rem]">
        <ParallaxBannerLayer speed={-20}>
          <StaticImage
            src="../images/hero.jpg"
            alt={t("homePage.hero.alt")}
            layout="fullWidth"
            className="h-full"
          />
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <div className="absolute inset-0 flex flex-col h-[92vh] sm:h-[32rem] text-center sm:text-start justify-center px-6 max-w-6xl mx-auto">
        <h1 className="sm:w-1/2 mb-10 text-white">
          {t("homePage.hero.title")}
        </h1>
        <p className="sm:w-1/2 text-white text-lg font-medium">
          {t("homePage.hero.text")}
        </p>
      </div>
      <section className="space-y-20 custom-container">
        <article className="space-y-8">
          <h2>{t("homePage.presentation.title")}</h2>
          <div className="space-y-6">
            {(
              t("homePage.presentation.text", {
                returnObjects: true,
              }) as string[]
            ).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
        <article className="space-y-8">
          <h2>{t("homePage.contact.title")}</h2>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
            <StaticImage
              src="../images/family.jpg"
              alt={t("homePage.contact.alt")}
              className="rounded-lg sm:min-w-[18rem] lg:min-w-[24rem]"
            />
            <div className="flex flex-col items-center space-y-6">
              <p>{t("homePage.contact.text")}</p>
              <div className="space-y-6">
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
                <a
                  href={`tel:+${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="card"
                >
                  <FontAwesomeIcon icon={faPhone} size="3x" className="mb-2" />
                  {PHONE_NUMBER}
                </a>
                <a href={`mailto:${EMAIL}`} className="card">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="3x"
                    className="mb-2"
                  />
                  {EMAIL}
                </a>
              </div>
            </div>
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
