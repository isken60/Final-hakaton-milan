import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AutoSwiper = () => {
  return (
    <>
      <Swiper
        style={{ width: "50%", marginTop: "10px" }}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/11/313204723_615078927049996_8265329594491334111_n.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://conteudo.imguol.com.br/c/esporte/2b/2020/08/03/assistente-campeonato-champions-league-1596460438798_v2_1x1.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/11/FglyO_GXwAYVt47.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/10/Ff8X-5JWIBEDudv.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/09/pioli-1.png"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/08/FbJtnKfUsAAkCDQ.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/04/FRNVcV4XsAIJen9.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/10/FekMdU5WQAIWOwy.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://milanac.ru/wp-content/uploads/2022/05/FS0VFJsWIAEr7US.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AutoSwiper;
