import React, { useState, useEffect } from "react";
import "./additionfeature.css"; 
import image1 from "./unnamed.png";
import image2 from "./trade2.jpeg";
import image3 from "./trade3.jpeg";
import image4 from "./trade4.jpeg";

const sections = [
  {
    id: 1,
    image: image1,
    heading: "Platform to Trade from Anywhere in The World",
    subheading: "Dashboard",
    content:
      "Manage your trades efficiently with our user-friendly Dashboard. Track and analyze your trading activities on a single integrated platform. Our dynamic charts and customizable layouts empower you to spot trends and make well-informed decisions effortlessly.",
  },
  {
    id: 2,
    image: image2,
    heading: "Platform to Trade from Anywhere in The World",
    subheading: "BitCoin",
    content:
      "Explore the world of Bitcoin trading with our comprehensive platform. Monitor and manage your Bitcoin transactions seamlessly. Utilize our interactive charts and flexible views to analyze market trends and execute informed trading strategies with confidence.",
  },
  {
    id: 3,
    image: image3,
    heading: "Platform to Trade from Anywhere in The World",
    subheading: "Pi Coin",
    content:
      "Take charge of your Pi Coin investments with our intuitive platform. Monitor your transactions and analyze performance effortlessly. Leverage our interactive charts and customizable interface to stay ahead of market movements and optimize your trading decisions.",
  },
  {
    id: 4,
    image: image4,
    heading: "Platform to Trade from Anywhere in The World",
    subheading: "Coin",
    content:
      "Optimize your trading experience with our versatile platform. Manage your Coin investments efficiently with real-time insights. Our interactive charts and customizable tools empower you to interpret market data and execute trades confidently.",
  },
];

const AdditionFeature = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <section className="additionfeature_">
        <div className="container mt-5">
          <div className="row active">
            <div className="col-md-6 col-sm-6">
              <div className="box-1 pt-5 pb-5">
                <img
                  src={sections[currentIndex].image}
                  alt={`img${sections[currentIndex].id}`}
                  className="img1"
                  style={{
                    transition: "transform 2s ease", 
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="box-2 pt-5 pb-5">
                <h1 id="boxhead">
                  Platform to <br /> Trade&nbsp;from&nbsp;
                  <span id="colortext">Anywhere</span> <br />
                  in The World
                </h1>
                <div>&nbsp;</div>
                <h2 className="heading"
                  style={{
                    transition: "transform 2s ease", 
                  }}
                >
                  {sections[currentIndex].subheading}
                </h2>
                <p
                  id="para1"
                  style={{
                    transition: "transform 2s ease", 
                  }}
                >
                  {sections[currentIndex].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionFeature;
