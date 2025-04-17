import Script from 'next/script'
import React from 'react'

export default function SiteTitleManage() {
  return (
    <>
      <Script id="hospital-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Hospital",
            "name": "Bumrungrad International Hospital RO",
            "url": "https://discoverinternationalmedicalservice.com/",
            "logo": "https://discoverinternationalmedicalservice.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBumrungrad%20%20Hospital_nav_logo.84babf34.png&w=256&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+8801847284860",
              "contactType": "Customer Service",
              "areaServed": "Bangladesh",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/bumrungraddhakaoffice"
            ],
            "description": "Bumrungrad International Hospital RO provides comprehensive healthcare services with world-class medical technology and expertise.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House: 02, Road: 07, Green Road",
              "addressLocality": "Dhanmondi",
              "addressRegion": "Dhaka",
              "postalCode": "1205",
              "addressCountry": "Bangladesh"
            },
            "openingHours": "Mo-Su 08:00-20:00",
            "priceRange": "$100+"
          }
        `}
      </Script>
    </>
  )
}
