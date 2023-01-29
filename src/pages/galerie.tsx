import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";

type ColumnWrapperProps = {
  images: Queries.GalleryPageQuery["galleryImages"]["nodes"];
  columnNumber: number;
  columnOrder: number;
};

const ColumnWrapper = ({
  images,
  columnNumber,
  columnOrder,
}: ColumnWrapperProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-2">
      {images.map((image, i) => {
        if (i % columnNumber === columnOrder) return null;

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
            key={i}
          />
        );
      })}
    </div>
  );
};

export default function GalleryPage({
  data,
  location,
}: PageProps<Queries.GalleryPageQuery>) {
  const images = [...data.galleryImages.nodes].sort(function (a, b) {
    return a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  return (
    <Layout pageKey="galleryPage" pathname={location.pathname}>
      <section className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 sm:py-2 sm:px-6 max-w-6xl mx-auto">
        <ColumnWrapper images={images} columnNumber={2} columnOrder={1} />
        <ColumnWrapper images={images} columnNumber={2} columnOrder={0} />
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
