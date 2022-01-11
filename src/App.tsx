import React, { useState, useEffect } from "react";
import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SwiperSlider from "./components/Carousel/SwiperSlider";
import { SwiperSlide } from "swiper/react";

import CardTimeDeal from "./components/Card/CardTimeDeal";
import { Grid, Row, Col, Section } from "@class101/ui";
import axios from "axios";

function App() {
  const [postDatas, setPostDatas] = useState<any[]>([]);

  useEffect(() => {
    getDatas();
  }, []);

  async function getDatas() {
    const res = await axios.get("http://localhost:4000/time_deal");
    setPostDatas(res.data);
  }
  console.log(postDatas);

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
              <SwiperSlider>
                {postDatas.map((postData) => (
                  <SwiperSlide key={postData.id}>
                    <CardTimeDeal
                      key={postData.id}
                      title={postData.title}
                      img={postData.img}
                      creator={postData.creator}
                      coupon={postData.coupon}
                      thumsUp={postData.thumsUp}
                      like={postData.like}
                      salePrice={postData.price.salePrice}
                      originalPrice={postData.price.originalPrice}
                      installment={postData.price.installment}
                    ></CardTimeDeal>
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
