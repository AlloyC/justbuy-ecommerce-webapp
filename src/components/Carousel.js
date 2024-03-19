import { useRef } from "react";
import Slider from "react-slick";
import { useSlider } from "../Provider/MainContex";

const Carousel = () => {
  const headerRef = useRef();
  let sliderRef = useRef();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = useSlider();

  return (
    <header ref={headerRef} className="slider-container relative p-5">
      <Slider
        {...settings}
        className="dark-overlay relative max-w-screen-md left-1/2 -translate-x-1/2"
      >
        {carouselImages.map((image, ID) => (
          <div key={ID} ref={sliderRef}>
            <img src={image} alt="showcasing shop and discounts" />
          </div>
        ))}
      </Slider>
    </header>
  );
};

export default Carousel;
