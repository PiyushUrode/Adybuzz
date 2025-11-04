import { Helmet } from "react-helmet";

const StructuredData = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adybuzz",
    "url": "https://adybuzz.com",
    "description": "Digital marketing & web development services for growing businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Balaghat",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "India",        
      "postalCode": "481001"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "areaServed": "India",
        "provider": "Adybuzz"
      },
      {
        "@type": "Service",
        "name": "Website Development",
        "areaServed": "India",
        "provider": "Adybuzz"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
