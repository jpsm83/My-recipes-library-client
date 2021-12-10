import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    //   <div className="h-32 overflow-hidden flex justify-center items-center mt-3">
    //     <img className="min-w-full min-h-full shrink-0"
    //       loading="lazy"
    //       src="./img/food-3.jpg"
    //       alt="Food Banner 1"
    //     />
    // </div>
    <div>
      <div className="flex justify-center items-center h-32 overflow-hidden mt-3">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={2000}
        >
          <img
            className="min-w-full min-h-full shrink-0"
            loading="lazy"
            src="./img/food-1.webp"
            alt="Food Banner 1"
          />
          <img
            className="min-w-full min-h-full shrink-0"
            loading="lazy"
            src="./img/food-2.webp"
            alt="Food Banner 2"
          />
          <img
            className="min-h-full shrink-0"
            loading="lazy"
            src="./img/food-3.webp"
            alt="Food Banner 3"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
