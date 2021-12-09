import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative ml-auto mr-auto h-50">
      <div className="absolute w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="object-cover overflow-hidden">
          <img
            loading="lazy"
            src="https://www.livinghealthy.ng/wp-content/uploads/2015/08/healthy-eating-photo.jpg"
            alt="Food Banner 1"
          />
        </div>
        <div className="object-cover overflow-hidden">
          <img
            loading="lazy"
            src="https://equalitycharterschool.org/wp-content/uploads/2017/08/healthy-foods.jpg"
            alt="Food Banner 2"
          />
        </div>
        <div className="object-cover overflow-hidden">
          <img
            loading="lazy"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqa9O62c3zh6F8c73lJhzR5Vm1W_rTcJhVg&usqp=CAU"
            alt="Food Banner 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
