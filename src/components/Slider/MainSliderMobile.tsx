import React, {
  useMemo,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Row, Icon, Headline2, Body1, Colors } from "@class101/ui";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Controller } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import Grid from "../../layout/Grid/Grid";

interface MainSliderProps {
  data: any;
}
function MainSliderMobile({ data: topEventDatas }: MainSliderProps) {
  // Swiper instance
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const progressBarRepeat = useRef<any>(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledSwiper2, setControlledSwiper2] = useState(null);
  const [sliderProgressBar, setSliderProgressBar] = useState(50);
  // Slides current index
  const [currentIndex, updateCurrentIndex] = useState(0);
  // Swiper settings
  const settings = useMemo<any>(
    () => ({
      spaceBetween: 0,
      breakpoints: {
        // when window width is >= 640px
        1022: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        0: {
          slidesPerView: 1,
        },
      },
      //   loop: true,
      //루프시 마지막 슬라이드가 맨앞에 오는 버그
    }),
    []
  );
  const updateIndex = useCallback(() => {
    updateCurrentIndex(swiperRef.current.swiper.realIndex);
    setSliderProgressBar(0);
  }, []);
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

  const startSliderProgressBar = () => {
    if (sliderProgressBar >= 100) {
      clearInterval(progressBarRepeat.current);
    } else {
      setSliderProgressBar((prve) => prve + 1);
    }
  };

  useEffect(() => {
    progressBarRepeat.current = setInterval(startSliderProgressBar, 3000 / 100);
  }, []);

  return (
    <div
      css={css`
        background-color: #888;
      `}
      style={{
        backgroundImage: `url(${topEventDatas[currentIndex + 1]?.img})`,
      }}
    >
      <Grid>
        <Row>
          {/* main slide wrap */}
          <div
            css={css`
              top: 2.5em;
              position: relative;
              width: 100%;
            `}
          >
            {/* main img slide */}

            <div
              css={css`
                width: 100%;
                border-radius: 5px;
                overflow: hidden;
                height: 200px;
                margin-top: 120px;
              `}
            >
              <Swiper
                ref={swiperRef}
                {...settings}
                modules={[Autoplay, Navigation, Pagination, Controller]}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                autoplay={{ delay: 3000 }}
                controller={{ control: controlledSwiper }}
                onSwiper={setControlledSwiper2}
              >
                {topEventDatas.map((topEventData: any, index: number) => (
                  <SwiperSlide key={topEventData.id}>
                    <img
                      src={topEventData.img}
                      alt={topEventData.title}
                      css={css`
                        width: 100%;
                      `}
                    ></img>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* title Slide */}

            <Swiper
              ref={swiperRef}
              {...settings}
              modules={[Controller]}
              onSwiper={setControlledSwiper}
              controller={{ control: controlledSwiper2 }}
              css={css`
                width: 100%;
                position: absolute;
                top: -20px;
                right: 0;
              `}
            >
              {topEventDatas.map((topEventData: any, index: number) => (
                <SwiperSlide key={topEventData.id}>
                  <Headline2
                    color={Colors.white}
                    css={css`
                      margin-bottom: 0.5em;
                    `}
                  >
                    {topEventData.title}
                  </Headline2>
                  <Body1 color={Colors.gray300}>{topEventData.subtitle}</Body1>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Row>
      </Grid>
    </div>
  );
}

export default MainSliderMobile;
