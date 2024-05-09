import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import AdminsProfileCard from "./AdminsProfileCard";
import styled from "styled-components";
import { COLORS } from "@constants/color";
import adminsDatas from "@datas/Admins.json";

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
      {adminsDatas.map((data, key) => {
        return (
          <SwiperSlide key={key}>
            <AdminsProfileCard
              name={data.name}
              position={data.position}
              phoneNumber={data.phoneNumber}
            />
          </SwiperSlide>
        );
      })}
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
