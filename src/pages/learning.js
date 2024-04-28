import React, { useEffect, useState, useRef } from "react";
import slide1 from "../assets/images/slider/1.jpg";
import slide2 from "../assets/images/slider/2.jpg";
import slide3 from "../assets/images/slider/3.jpg";

const Learning = () => {
  const videoRef = useRef(null);

  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const a = [1, 2, 3, 4, 5];
  const b = [1, 2, 6, 7, 8, 8];
  const c = [...new Set([...a, ...b])];
  console.log(c);

  const k = (...data) => {
    console.log(data, "kkkkkk");
  };

  async function getGoldRate() {
    const apiKey = "c0e017a250f5250e1e0711528b500135";
    const baseUrl = "https://api.metalpriceapi.com/v1/latest";
    const params = new URLSearchParams({
      access_key: apiKey,
      symbols: "XAU/INR", // Gold in Indian Rupee
    });

    try {
      const response = await fetch(`${baseUrl}?${params}`);
      const data = await response.json();

      if (data.success) {
        const goldRate = data.rates["XAU/INR"];
        return goldRate;
      } else {
        console.error("API error:", data.error);
        return null;
      }
    } catch (error) {
      console.error("Error fetching gold rate:", error);
      return null;
    }
  }

  // Call the function to get today's gold rate in INR
  getGoldRate().then((goldRate) => {
    if (goldRate !== null) {
      console.log(`Today's gold rate in INR: ${goldRate}`);
    } else {
      console.log("Failed to retrieve gold rate.");
    }
  });

  useEffect(() => {
    k("test", "new");
  }, []);

  const processData = (obj1, ...k) => {
    console.log(obj1, k, "processData");
  };

  useEffect(() => {
    const data1 = { id: 1, name: "John" };
    const data2 = { id: 2, name: "Jane" };
    const data3 = { id: 3, name: "Nuke" };

    processData(data1, data2, data3);
  }, []);

  const data = {
    k: [1, 2, 3],
    l: ["q", "w", "e"],
  };

  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const listInfo = (e) => {
    const key = e.target.value;
    const values = data[key] || [];
    setSelectedValues(values);
    setSelectedValue(values[0]); // Reset selected value when key changes
  };

  return (
    <>
      <div className="slider-container">
        <div className="slide">
          <img src={slide1} alt="banner-img" />
        </div>
        <div className="slide">
          <img src={slide2} alt="banner-img" />
        </div>
        <div className="slide">
          <img src={slide3} alt="banner-img" />
        </div>
      </div>
      <h3>Spread vs Rest operator in console</h3>
      <select onChange={(e) => listInfo(e)}>
        {Object.keys(data).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      {selectedValues.length > 0 && (
        <div>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {selectedValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
          {selectedValue && <p>Selected Value: {selectedValue}</p>}
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        capture="user"
        onChange={handleCapture}
      />
      <div>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleCapture}
        />
        <video ref={videoRef} width="640" height="480" autoPlay></video>
      </div>{" "}
    </>
  );
};

export default Learning;
