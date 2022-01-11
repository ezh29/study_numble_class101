import React, { useMemo } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Button, Icon } from "@class101/ui";

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
}

function SwiperSlider({ children }: sliderProps) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const settings = useMemo<any>(
    () => ({
      spaceBetween: 10,
      breakpoints: {
        // when window width is >= 640px
        1022: {
          slidesPerView: 4,
        },
        // when window width is >= 480px
        0: {
          slidesPerView: 2,
        },
      },
    }),
    []
  );

  return (
    <>
      <Swiper
        {...settings}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {children}
      </Swiper>
      <Button
        ref={navigationPrevRef}
        css={css`
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -60px;
          background-color: #fff;
          &:hover {
            background-color: #f8f8f8;
          }
        `}
      >
        <Icon.ChevronLeft />
      </Button>
      <Button
        ref={navigationNextRef}
        css={css`
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -60px;
          background-color: #fff;
          &:hover {
            background-color: #f8f8f8;
          }
        `}
      >
        <Icon.ChevronRight />
      </Button>
    </>
  );
}
export default SwiperSlider;
