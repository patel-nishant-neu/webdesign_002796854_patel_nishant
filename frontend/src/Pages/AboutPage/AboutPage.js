import React from "react";
import AboutCard from "../../Components/AboutCard/AboutCard";
import MainScreen from "../../Components/MainScreen/MainScreen";
import about from "../../Data/about";

const AboutPage = () => {
  const data = () => {
    return about;
  };
  return (
    <>
      <MainScreen title="About Us and Our Team" />
      <div className = "container">
      <div className="Cards">
        {data().map((data) => (
          <AboutCard
            title={data.title}
            loc={data.location}
            image={data.image}
            key={data.key}
            content={data.content}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default AboutPage;