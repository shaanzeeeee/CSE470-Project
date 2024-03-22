// Features.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loader from "react-js-loader";
import Footer from "./Footer";

const Features = () => {
  // New state variables
  const [prompt, setPrompt] = useState("");
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [height, setHeight] = useState(170); // Default height
  const [weight, setWeight] = useState(70); // Default weight
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isWeightLoss, setIsWeightLoss] = useState(false);
  const [isWeightGain, setIsWeightGain] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModerate, setIsModerate] = useState(false);
  const [isInactive, setIsInactive] = useState(false);

  const handleGenerateContent = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:3001/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: prompt,
          height,
          weight,
          gender: { isMale, isFemale },
          activity: { isActive, isModerate, isInactive },
          dietaryPreferences: { isVeg, isNonVeg, isVegan },
          target: { isWeightLoss, isWeightGain },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      const formattedText = Array.isArray(result.text)
        ? result.text.join("\n")
        : result.text;

      setResponseText(formattedText);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      {/* Link tag for CSS (place it in the head of your HTML document) */}
      <link rel="stylesheet" type="text/css" href="/css/features/styles.css" />
      <div className="chat-container">
        <h2>Generate Your Personalized Diet:</h2>
        {/* BMI Calculator */}
        <div className="chat-input">
          <div className="bmi">
            <label className="height">
              <h5>BMI Calculator:</h5>
              Height (cm):
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="1"
                max="500"
              />
            </label>
            <label>
              Weight (kg):
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="1"
                max="500"
              />
            </label>
          </div>

          {/* Gender */}
          <div className="gender">
            <label>
              <h5> Gender </h5>
              <input
                className="input1"
                type="radio"
                name="gender"
                checked={isMale}
                onChange={() => setIsMale(!isMale)}
              />{" "}
              Male
              <input
                className="input2"
                type="radio"
                name="gender"
                checked={isFemale}
                onChange={() => setIsFemale(!isFemale)}
              />{" "}
              Female
            </label>
          </div>

          {/* Activity-Level */}
          <div className="activity">
            <label>
              <h5> Activity Level </h5>
              <input
                className="input1"
                type="radio"
                name="activity"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />{" "}
              Active
              <input
                className="input2"
                type="radio"
                name="activity"
                checked={isModerate}
                onChange={() => setIsModerate(!isModerate)}
              />{" "}
              Moderate
              <input
                className="input3"
                type="radio"
                name="activity"
                checked={isInactive}
                onChange={() => setIsInactive(!isInactive)}
              />{" "}
              Inactive
            </label>
          </div>
        </div>

        {/* Dietary Preferences */}
        <div className="chat-input">
          <div className="preferences">
            <h5>Dietary Preferences:</h5>
            <label>
              <input
                className="input1"
                type="radio"
                name="dietaryPreferences"
                checked={isVeg}
                onChange={() => setIsVeg(!isVeg)}
              />
              Veg
            </label>
            <label>
              <input
                className="input2"
                type="radio"
                name="dietaryPreferences"
                checked={isNonVeg}
                onChange={() => setIsNonVeg(!isNonVeg)}
              />
              Non-Veg
            </label>
            <label>
              <input
                className="input3"
                type="radio"
                name="dietaryPreferences"
                checked={isVegan}
                onChange={() => setIsVegan(!isVegan)}
              />
              Vegan
            </label>
          </div>
        </div>

        {/* Target */}
        <div className="chat-input">
          <div className="target">
            <label>
              <h5>Target:</h5>
              <input
                className="input1"
                type="radio"
                name="target"
                checked={isWeightLoss}
                onChange={() => setIsWeightLoss(!isWeightLoss)}
              />
              Weight Loss
              <input
                className="input2"
                type="radio"
                name="target"
                checked={isWeightGain}
                onChange={() => setIsWeightGain(!isWeightGain)}
              />
              Weight Gain
            </label>
          </div>
        </div>

        {/* User Input Prompt */}
        <div className="chat-input">
          <label>
            <h5> Input Prompt:</h5>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows="3"
            />
          </label>
        </div>

        {/* Generate Button */}
        <div className="chat-input">
          <button onClick={handleGenerateContent}>Generate</button>
        </div>

        <div className="chat-response">
          <strong>Response:</strong>
          {isLoading ? (
            <Loader type="bubble-loop" bgColor={"#00bfff"} size={50} />
          ) : (
            <pre>{responseText}</pre>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
