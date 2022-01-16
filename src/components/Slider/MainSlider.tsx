import React, {
  useMemo,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Row, Icon, Headline2, Body1, Colors, Badge } from "@class101/ui";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Controller } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import Grid from "../../layout/Grid/Grid";

interface MainSliderProps {
  data: any;
  length: Number;
}
function MainSlider({ data: topEventDatas, length }: MainSliderProps) {
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
                width: 650px;
                border-radius: 5px;
                overflow: hidden;
                height: 400px;
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
                    {topEventData.badge && (
                      <Badge
                        size="md"
                        color={Colors.white}
                        backgroundColor={topEventData.bdColor}
                        css={css`
                          position: absolute;
                          top: 10px;
                          left: 10px;
                          font-size: 16px !important;
                        `}
                      >
                        {topEventData.badge}
                      </Badge>
                    )}
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
                width: 525px;
                position: absolute;
                top: 0;
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
            {/* nav */}
            <div
              css={css`
                display: flex;
                align-items: center;
                position: absolute;
                right: 0px;
                bottom: 50px;
                width: 525px;
              `}
            >
              <div
                css={css`
                  width: 50px;
                  font-size: 12px;
                  color: rgb(255, 255, 255);
                  cursor: default;
                  margin-right: 8px;
                `}
              >
                <span
                  css={css`
                    font-weight: bold;
                    padding-right: 8px;
                    border-right: 1px solid rgba(255, 255, 255, 0.4);
                  `}
                >
                  {currentIndex + 1}
                </span>
                <span
                  css={css`
                    padding: 0px 0px 0px 8px;
                  `}
                >
                  {length}
                </span>
              </div>
              {/* ProgressBar */}
              <div
                css={{
                  position: "relative",
                  height: "1px",
                  width: "100%",
                  backgroundColor: `${Colors.gray800}`,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${sliderProgressBar}%`,
                    position: "absolute",
                    backgroundColor: `${Colors.white}`,
                    height: "1px",
                  }}
                ></div>
              </div>

              {/* prev next btn */}
              <div
                css={css`
                  cursor: pointer;
                  padding-left: 10px;
                  width: 80px;
                `}
              >
                <span ref={navigationPrevRef} css={css``}>
                  <Icon.ChevronLeft fillColor={Colors.white} />
                </span>
                <span ref={navigationNextRef} css={css``}>
                  <Icon.ChevronRight fillColor={Colors.white} />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Grid>
    </div>
  );
}

export default MainSlider;
