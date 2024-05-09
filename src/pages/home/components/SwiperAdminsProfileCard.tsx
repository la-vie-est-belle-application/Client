import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import AdminsProfileCard from "./AdminsProfileCard";
import styled from "styled-components";
import { COLORS } from "@constants/color";

const SwiperAdminsProfileCard = () => {
  return (
    <StyledSwiper
      pagination={true}
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      className="mySwiper"
      loop={true}
    >
      <SwiperSlide>
        <AdminsProfileCard />
      </SwiperSlide>
      <SwiperSlide>
        <AdminsProfileCard />
      </SwiperSlide>
      <SwiperSlide>
        <AdminsProfileCard />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default SwiperAdminsProfileCard;

const StyledSwiper = styled(Swiper)`
  width: 100%;

  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
    background-color: ${COLORS.purple600};
  }
`;
