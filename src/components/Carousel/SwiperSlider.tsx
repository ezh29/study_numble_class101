import React, {
  useMemo,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Button, Icon } from "@class101/ui";

interface SwiperSliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  slidesPerViewLg: number;
  slidesPerViewSm: number;
  length: number;
  navigation?: boolean;
}

function SwiperSlider({
  children,
  slidesPerViewLg,
  slidesPerViewSm,
  length,
  navigation = true,
}: SwiperSliderProps) {
  // Swiper instance
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // Slides current index
  const [currentIndex, updateCurrentIndex] = useState(0);
  // Swiper settings
  const settings = useMemo<any>(
    () => ({
      spaceBetween: 10,
      breakpoints: {
        // when window width is >= 640px
        1022: {
          slidesPerView: slidesPerViewLg,
        },
        // when window width is >= 480px
        0: {
          slidesPerView: slidesPerViewSm,
        },
      },
    }),
    [slidesPerViewLg, slidesPerViewSm]
  );
  const updateIndex = useCallback(
    () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    []
  );
  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {currentIndex}/{length}
      <Swiper
        ref={swiperRef}
        {...settings}
        modules={[Navigation]}
        navigation={
          navigation && {
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }
        }
      >
        {children}
      </Swiper>
      {navigation && (
        <>
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
      )}
    </div>
  );
}
export default SwiperSlider;
