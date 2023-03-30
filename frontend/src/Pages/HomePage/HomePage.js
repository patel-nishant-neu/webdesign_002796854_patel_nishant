import React, {useState} from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
import community from "../../Images/Community.png";
import './HomePage.css';

const HomePage = () => {

  // Define state for the slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define an array of slides for the slider
  const sliderData = [
    {
      image: "https://placeimg.com/640/480/arch",
      title: "Slide 1",
      subtitle: "Lorem ipsum dolor sit amet",
    },
    {
      image: "https://placeimg.com/640/480/nature",
      title: "Slide 2",
      subtitle: "Consectetur adipiscing elit",
    },
    {
      image: "https://placeimg.com/640/480/tech",
      title: "Slide 3",
      subtitle: "Sed do eiusmod tempor incididunt",
    },
  ];

  // Define an array of content for the sections
  const sectionData = [
    {
      image: "https://placeimg.com/640/480/people",
      title: "Section 1",
      subtitle: "Lorem ipsum dolor sit amet",
    },
    {
      image: "https://placeimg.com/640/480/animals",
      title: "Section 2",
      subtitle: "Consectetur adipiscing elit",
    },
    {
      image: "https://placeimg.com/640/480/abstract",
      title: "Section 3",
      subtitle: "Sed do eiusmod tempor incididunt",
    },
  ];

  // Define a function to handle changing the slider slide
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    
    <div className="HomePage">
      {/* Hero Slider */}
      <MainScreen title="FoodLicious" />
      <div className="HeroSlider">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`Slide ${index === currentSlide ? "Active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="SlideContent">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="SlideNavigation">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`Dot ${index === currentSlide ? "Active" : ""}`}
              onClick={() => handleSlideChange(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="Sections">
        {sectionData.map((section, index) => (
          <div key={index} className="Section">
            <div
              className="SectionImage"
              style={{ backgroundImage: `url(${section.image})` }}
            ></div>
            <div className="SectionContent">
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
              <a href="#">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>


    /* <div>
      <MainScreen title="NU Moves Mission" />
      <Container>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="features-box">
                <h3 class="mb-4">
                  NU MOVES - A Non-profit mission for Huskies on the move
                </h3>
                <p class="text-muted mb-4">
                  NU MOVES aims to alleviate the hassle Huskies face every year
                  while moving in and out of their accommodation. It provides a
                  safe and reliable platform for a close-knit community of
                  Northeastern Unioversity students to buy, sell & rent stuff
                  among themselves.{" "}
                </p>
                <div class="mt-4"></div>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
              <div class="text-center mt-5 mt-lg-0">
                <img
                  src={community}
                  alt="Features"
                  class="img-fluid"
                  id="community-img"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div> */
  );
};

export default HomePage;
