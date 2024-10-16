import SplashScreen from "@/components/SplashScreen";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        setTimeout(() => {
          setShowSplash(false);
          router.replace("/(tabs)/");
        }, 3000); // Show splash for 3 seconds
      } catch (error) {
        console.error("Failed to load onboarding status:", error);
      }
    };

    checkOnboardingStatus();
  }, []);

  return <>{showSplash ? <SplashScreen /> : null}</>;
}
