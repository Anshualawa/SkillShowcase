import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/skillshowcase"); // Navigate to your main page after 3 seconds
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">Welcome to SkillShowcase</h1>
    </div>
  );
};

export default SplashScreen;
