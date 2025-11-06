import React, { useState, useEffect } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AGE_VERIFIED_KEY = "ageVerified";

const AgeVerificationBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const verified = localStorage.getItem(AGE_VERIFIED_KEY);
    if (!verified) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      // For mobile Safari
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [visible]);

  const handleYes = () => {
    localStorage.setItem(AGE_VERIFIED_KEY, "true");
    setVisible(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-6 text-white">
      <div className="bg-white text-mainBlack p-8 rounded-lg shadow-2xl max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-mainBrown mb-4">
          {t("ageVerification.title")}
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          {t("ageVerification.message")}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleYes}
            className="bg-mainBrown hover:bg-mainDarkBrown text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {t("ageVerification.yes")}
          </button>
          <button
            onClick={handleNo}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {t("ageVerification.no")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationBanner;
