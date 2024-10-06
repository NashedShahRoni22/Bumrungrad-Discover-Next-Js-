import React from "react";
import Script from "next/script";

const GoogleTagManage = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/ns.html?id=GTM-MPGNK8Z5"
        //   strategy="afterInteractive"
      />
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MPGNK8Z5');
        `}
      </Script>
    </>
  );
};

export default GoogleTagManage;
