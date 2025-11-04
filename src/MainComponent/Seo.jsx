
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, image }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why is website development important for my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "A well-designed website enhances brand credibility, improves user experience, and increases conversions.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to develop a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "The timeline depends on the complexity of the project, but most websites are completed within 4-6 weeks.",
              },
            },
            {
              "@type": "Question",
              name: "Is SEO included in website development?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes! We ensure your website is optimized for search engines with proper meta tags, keyword integration, and fast-loading design.",
              },
            },
          ],
        })}
      </script>

      {/* Local SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Adybuzz",
          image: "https://adybuzz.com/logo.jpg",
          telephone: "7581001715",
          email: "adybuzz5@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Your Street Address",
            addressLocality: "Your City",
            addressRegion: "Your State",
            postalCode: "Your Postal Code",
            addressCountry: "IN",
          },
          url: "https://adybuzz.com",
          openingHours: "Mo-Fr 09:00-18:00",
        })}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SEO;
