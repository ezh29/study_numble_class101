import React, {
  useMemo,
  useRef,
  useState,
} from "react"; /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Button,
  ButtonGroup,
  Icon,
  Headline2,
  Body1,
  Colors,
} from "@class101/ui";
import Grid from "../../layout/Grid/Grid";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface BottomSliderProps {
  data: any;
  isPc: boolean;
  isTablet: boolean;
  isMobile: boolean;
}
function BottomSlider({
  data: bottomEventDatas,
  isPc,
  isTablet,
  isMobile,
}: BottomSliderProps) {
  // Swiper instance
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

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

  return (
    <>
      {isPc && (
        <div>
          <Swiper
            ref={swiperRef}
            {...settings}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            css={css`
              width: 100%;
            `}
          >
            {bottomEventDatas.map((bottomEventData: any, index: number) => (
              <SwiperSlide key={bottomEventData.id}>
                <div
                  css={css`
                    background-color: ${bottomEventData.bgColor};
                    margin-top: 40px;
                  `}
                >
                  <Grid>
                    <img
                      src={bottomEventData.img}
                      alt={bottomEventData.title}
                      css={css`
                        width: 300px;
                        height: 300px;
                        border-radius: 300px;
                        position: absolute;
                        right: 10px;
                        bottom: -30px;
                      `}
                    ></img>
                    <div
                      css={css`
                        position: relative;
                        padding-top: 30px;
                        height: 200px;
                      `}
                    >
                      <Headline2
                        color={Colors.white}
                        css={css`
                          margin-bottom: 0.5em;
                        `}
                      >
                        {bottomEventData.title}
                      </Headline2>
                      <Body1 color={Colors.gray300}>
                        {bottomEventData.subtitle}
                      </Body1>
                      <div
                        css={css`
                          position: absolute;
                          bottom: 20px;
                        `}
                      >
                        <Button>더 알아보기</Button>
                      </div>
                    </div>
                  </Grid>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Grid>
            <div
              css={css`
                cursor: pointer;
                position: absolute;
                bottom: 20px;
                right: 0;
                z-index: 9;
              `}
            >
              <ButtonGroup>
                <Button ref={navigationPrevRef}>
                  <Icon.ChevronLeft fillColor={Colors.black} />
                </Button>
                <Button ref={navigationNextRef}>
                  <Icon.ChevronRight fillColor={Colors.black} />
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        </div>
      )}
      {isTablet && (
        <div>
          <Swiper
            ref={swiperRef}
            {...settings}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            css={css`
              width: 100%;
            `}
          >
            {bottomEventDatas.map((bottomEventData: any, index: number) => (
              <SwiperSlide key={bottomEventData.id}>
                <div
                  css={css`
                    background-color: ${bottomEventData.bgColor};
                    margin-top: 40px;
                  `}
                >
                  <Grid>
                    <img
                      src={bottomEventData.img}
                      alt={bottomEventData.title}
                      css={css`
                        width: 300px;
                        height: 300px;
                        border-radius: 300px;
                        position: absolute;
                        right: 10px;
                        bottom: -30px;
                      `}
                    ></img>
                    <div
                      css={css`
                        position: relative;
                        padding-top: 20px;
                        height: 250px;
                      `}
                    >
                      <Headline2
                        color={Colors.white}
                        css={css`
                          margin-bottom: 0.5em;
                        `}
                      >
                        {bottomEventData.title}
                      </Headline2>
                      <Body1 color={Colors.gray300}>
                        {bottomEventData.subtitle}
                      </Body1>
                      <div
                        css={css`
                          position: absolute;
                          bottom: 20px;
                        `}
                      >
                        <Button>더 알아보기</Button>
                      </div>
                    </div>
                  </Grid>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Grid>
            <div
              css={css`
                cursor: pointer;
                position: absolute;
                bottom: 20px;
                right: 0;
                z-index: 9;
              `}
            >
              <ButtonGroup>
                <Button ref={navigationPrevRef}>
                  <Icon.ChevronLeft fillColor={Colors.black} />
                </Button>
                <Button ref={navigationNextRef}>
                  <Icon.ChevronRight fillColor={Colors.black} />
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        </div>
      )}
      {isMobile && (
        <div>
          <Swiper
            ref={swiperRef}
            {...settings}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            css={css`
              width: 100%;
            `}
          >
            {bottomEventDatas.map((bottomEventData: any, index: number) => (
              <SwiperSlide key={bottomEventData.id}>
                <div
                  css={css`
                    background-color: ${bottomEventData.bgColor};
                    margin-top: 40px;
                  `}
                >
                  <Grid>
                    <img
                      src={bottomEventData.img}
                      alt={bottomEventData.title}
                      css={css`
                        width: 300px;
                        height: 300px;
                        border-radius: 300px;
                        position: absolute;
                        right: 10px;
                        bottom: -30px;
                      `}
                    ></img>
                    <div
                      css={css`
                        position: relative;
                        padding-top: 20px;
                        height: 300px;
                      `}
                    >
                      <Headline2
                        color={Colors.white}
                        css={css`
                          margin-bottom: 0.5em;
                        `}
                      >
                        {bottomEventData.title}
                      </Headline2>
                      <Body1 color={Colors.gray300}>
                        {bottomEventData.subtitle}
                      </Body1>
                      <div
                        css={css`
                          position: absolute;
                          bottom: 20px;
                        `}
                      >
                        <Button>더 알아보기</Button>
                      </div>
                    </div>
                  </Grid>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Grid>
            <div
              css={css`
                cursor: pointer;
                position: absolute;
                bottom: 20px;
                right: 0;
                z-index: 9;
              `}
            >
              <ButtonGroup>
                <Button ref={navigationPrevRef}>
                  <Icon.ChevronLeft fillColor={Colors.black} />
                </Button>
                <Button ref={navigationNextRef}>
                  <Icon.ChevronRight fillColor={Colors.black} />
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        </div>
      )}
    </>
  );
}

export default BottomSlider;
