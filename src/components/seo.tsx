import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import * as React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

type SeoProps = {
  description: string;
  title: string;
  pathname: string;
  children?: React.ReactNode;
};

// https://github.com/gatsbyjs/gatsby/issues/36458
export default function Seo({
  description,
  title,
  pathname,
  children,
}: SeoProps) {
  const { language } = useI18next();

  const data = useStaticQuery<Queries.SeoComponentQuery>(
    graphql`
      query SeoComponent {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
        ogImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(height: 630, width: 1200)
          }
        }
      }
    `
  );

  const siteUrl = data.site?.siteMetadata?.siteUrl!;
  const ogImage = data.ogImage?.childImageSharp?.gatsbyImageData!;

  const seo = {
    title,
    description,
    image: `${siteUrl}${ogImage.images.fallback?.src}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {children}
    </Helmet>
  );
}
