import React, { useState, useEffect } from "react";
import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SwiperSlider from "./components/Carousel/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import { Grid, Row, Col, Section } from "@class101/ui";

import CardTimeDeal from "./components/Card/CardTimeDeal";
import CardMdDeal from "./components/Card/CardMdDeal";
import CardPopularEvent from "./components/Card/CardPopularEvent";
import CardOpenSoon from "./components/Card/CardOpenSoon";

function App() {
  const [timeDealDatas, setTimeDealDatas] = useState<any[]>([]);
  const [mdRecommendDatas, setMdRecommendDatas] = useState<any[]>([]);
  const [popularEventDatas, setPopularEventDatas] = useState<any[]>([]);
  const [openSoonDatas, setOpenSoonDatas] = useState<any[]>([]);

  useEffect(() => {
    getTimeDealDatas();
    getMdRecommendDatas();
    getPopularEventDatas();
    getOpenSoonDatas();
  }, []);

  // 오늘의 특가! TIMEDEAL
  async function getTimeDealDatas() {
    const jsonDatas = require("./json/data.json");
    setTimeDealDatas(jsonDatas.time_deal);
  }
  //MD추천 클래스
  async function getMdRecommendDatas() {
    const jsonDatas = require("./json/data.json");
    setMdRecommendDatas(jsonDatas.md_recommend);
  }
  //진행중인 인기 이벤트
  async function getPopularEventDatas() {
    const jsonDatas = require("./json/data.json");
    setPopularEventDatas(jsonDatas.popular_event);
  }
  //오픈 예정 클래스
  async function getOpenSoonDatas() {
    const jsonDatas = require("./json/data.json");
    setOpenSoonDatas(jsonDatas.open_soon);
  }

  return (
    <>
      <Grid maxWidthNone={false}>
        <Row>{/* <Header></Header> */}</Row>
        <Row>
          <Col lg={12}>
            <Section
              title="오늘의 특가! TIME DEAL"
              to="/"
              linkText="전체 클래스 보기"
            >
              <SwiperSlider
                slidesPerViewLg={4}
                slidesPerViewSm={2}
                length={timeDealDatas.length}
              >
                {timeDealDatas.map((timeDealData) => (
                  <SwiperSlide key={timeDealData.id}>
                    <CardTimeDeal
                      key={timeDealData.id}
                      title={timeDealData.title}
                      img={timeDealData.img}
                      creator={timeDealData.creator}
                      coupon={timeDealData.coupon}
                      thumsUp={timeDealData.thumsUp}
                      like={timeDealData.like}
                      salePrice={timeDealData.price.salePrice}
                      originalPrice={timeDealData.price.originalPrice}
                      installment={timeDealData.price.installment}
                    ></CardTimeDeal>
                  </SwiperSlide>
                ))}
              </SwiperSlider>
            </Section>
            <Section title="MD 추천 클래스" to="/">
              <SwiperSlider
                slidesPerViewLg={4}
                slidesPerViewSm={2}
                length={mdRecommendDatas.length}
              >
                {mdRecommendDatas.map((mdRecommendData) => (
                  <SwiperSlide key={mdRecommendData.id}>
                    <CardMdDeal
                      key={mdRecommendData.id}
                      title={mdRecommendData.title}
                      img={mdRecommendData.img}
                      creator={mdRecommendData.creator}
                      coupon={mdRecommendData.coupon}
                      thumsUp={mdRecommendData.thumsUp}
                      like={mdRecommendData.like}
                      salePrice={mdRecommendData.price?.salePrice}
                      originalPrice={mdRecommendData.price?.originalPrice}
                      installment={mdRecommendData.price?.installment}
                    ></CardMdDeal>
                  </SwiperSlide>
                ))}
              </SwiperSlider>
            </Section>
            <Section
              title="진행중인 인기 이벤트"
              to="/"
              linkText="전체 이벤트 보기"
            >
              <SwiperSlider
                slidesPerViewLg={3}
                slidesPerViewSm={2}
                length={popularEventDatas.length}
              >
                {popularEventDatas.map((popularEventData) => (
                  <SwiperSlide key={popularEventData.id}>
                    <CardPopularEvent
                      key={popularEventData.id}
                      title={popularEventData.title}
                      img={popularEventData.img}
                      startDate={popularEventData.period.startDate}
                      finishDate={popularEventData.period.finishDate}
                    ></CardPopularEvent>
                  </SwiperSlide>
                ))}
              </SwiperSlider>
            </Section>
            <Section
              title="오픈 예정 클래스"
              description="오픈 예정인 클래스를 응원하면 얼리버드 오픈 시 알려드려요!"
              to="/"
              linkText="전체 이벤트 보기"
            >
              <SwiperSlider
                slidesPerViewLg={4}
                slidesPerViewSm={2}
                length={openSoonDatas.length}
              >
                {openSoonDatas.map((openSoonData) => (
                  <SwiperSlide key={openSoonData.id}>
                    <CardOpenSoon
                      key={openSoonData.id}
                      title={openSoonData.title}
                      img={openSoonData.img}
                      creator={openSoonData.creator}
                      goal={openSoonData.cheer?.goal}
                      score={openSoonData.cheer?.score}
                      finishDate={openSoonData.cheer?.finishDate}
                    ></CardOpenSoon>
                  </SwiperSlide>
                ))}
              </SwiperSlider>
            </Section>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default App;
