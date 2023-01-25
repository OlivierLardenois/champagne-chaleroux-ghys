import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";

export default function GalleryPage({
  data,
  location,
}: PageProps<Queries.GalleryPageQuery>) {
  const { t } = useTranslation();

  const images = [...data.galleryImages.nodes].sort(function (a, b) {
    return a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  return (
    <Layout pageKey="galleryPage" pathname={location.pathname}>
      <section className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 sm:py-2 max-w-6xl mx-auto">
        <div className="flex flex-col space-y-2">
          {images.map((image, i) => {
            if (i % 2 === 1) return null;

            const gatsbyImageData = getImage(
              image.childImageSharp?.gatsbyImageData ?? null
            );
            if (!gatsbyImageData) return null;

            // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
            return (
              <GatsbyImage
                image={gatsbyImageData}
                alt={t(`galleryPage.alts.${i}`)}
                className="h-1/5"
              />
            );
          })}
        </div>
        <div className="flex flex-col space-y-2">
          {images.map((image, i) => {
            if (i % 2 === 0) return null;

            const gatsbyImageData = getImage(
              image.childImageSharp?.gatsbyImageData ?? null
            );
            if (!gatsbyImageData) return null;

            return (
              <GatsbyImage
                image={gatsbyImageData}
                alt={t(`galleryPage.alts.${i}`)}
                className="h-1/5"
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const GalleryPageQuery = graphql`
  query GalleryPage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    galleryImages: allFile(filter: { dir: { regex: "/images/gallery/" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
