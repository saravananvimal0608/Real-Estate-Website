import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import scroll1 from "../images/scroll2.png";
import scroll2 from "../images/scroll3.png";
import scroll3 from "../images/scroll4.png";
import scroll4 from "../images/scroll5.png";
import scroll5 from "../images/scroll5.png";

function Swipper() {
  return (
    <div>
      <div className="container text-center py-5">
        <h3>Find Properties in These Cities</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {[scroll5, scroll2, scroll3, scroll4, scroll1, scroll4, scroll3].map(
          (img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`City ${i + 1}`}
                style={{
                  width: "90%",
                  borderRadius: "10px",
                  marginLeft: "5%",
                }}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default Swipper;
