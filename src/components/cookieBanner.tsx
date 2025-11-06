import React, { useState, useEffect } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const COOKIE_CONSENT_KEY = "cookieConsent";
const ANALYTICS_CONSENT_KEY = "analyticsConsent";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(ANALYTICS_CONSENT_KEY, "true");
    setVisible(false);
    // Enable Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(ANALYTICS_CONSENT_KEY, "false");
    setVisible(false);
    // Disable Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="max-w-6xl py-4 px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("cookieConsent.title")}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("cookieConsent.message")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:ml-4">
            <button
              onClick={handleAcceptNecessary}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 border border-gray-300"
            >
              {t("cookieConsent.necessary")}
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-mainBrown hover:bg-mainDarkBrown rounded-lg transition-colors duration-200"
            >
              {t("cookieConsent.acceptAll")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
