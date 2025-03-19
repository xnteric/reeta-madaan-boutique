'use client';

import Script from 'next/script';

export default function ThirdPartyScripts() {
  return (
    <>
      {/* Example Google Tag Manager - Replace with your actual GTM ID when needed */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      )}
      
      {/* Social Media Sharing Scripts - Load only when needed */}
      <Script
        id="facebook-jssdk"
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js"
      />
    </>
  );
} 