import React from "react";
import SponsorshipPage from "./components/cardsandinfo";
import HeadingSection from "../Header";
import { Helmet } from "react-helmet";

function SponserShip() {
  const pageTitle =
    "Sponsorship | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Discover sponsorship opportunities at our conference, and learn how your organization can support innovation in sustainability and future technologies.";

  return (
    <div>
      <Helmet>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.icsift.com/" />
        {/* Basic Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ICSIFT",
            description: pageDescription,
          })}
        </script>
      </Helmet>
      <HeadingSection />
      <SponsorshipPage />
    </div>
  );
}

export default SponserShip;
