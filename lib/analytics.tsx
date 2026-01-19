"use client";

import Script from "next/script";

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Event tracking helper
export const trackEvent = (
  eventName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventParams?: Record<string, any>
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window !== "undefined" && (window as any).gtag) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", eventName, eventParams);
  }
};

// Common events for visa consultancy
export const analytics = {
  trackFormSubmit: (formName: string) => {
    trackEvent("form_submit", {
      form_name: formName,
    });
  },
  trackContactClick: (method: string) => {
    trackEvent("contact_click", {
      contact_method: method,
    });
  },
  trackCountryView: (country: string) => {
    trackEvent("country_view", {
      country_name: country,
    });
  },
  trackServiceView: (service: string) => {
    trackEvent("service_view", {
      service_name: service,
    });
  },
};
