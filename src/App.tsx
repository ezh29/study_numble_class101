import React, { useState, useEffect } from "react";
import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Grid,
  Row,
  Col,
  Section,
  GridList,
  Card,
  Caption1,
  Badge,
  Icon,
  Colors,
} from "@class101/ui";
import axios from "axios";
import CardPrice from "./components/Card/CardPrice";

function App() {
  const [postData, setPostData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get("http://localhost:4000/time_deal");
    setPostData(res.data);
  }
  console.log(postData);

  return (
    <>
      <Grid maxWidthNone={false}>
        <Row>{/* <Header></Header> */}</Row>
        <Row>
          <Col lg={12}>
            <Section title="오늘의 특가! TILE DEAL" to="/">
              <GridList
                items={postData}
                smColumn={2}
                lgColumn={4}
                renderItem={(item) => {
                  return (
                    <Card
                      to={"/"}
                      title={item.title}
                      coverImage={item.img}
                      extraTop={
                        <>
                          <Badge
                            icon={<Icon.Timer fillColor={Colors.white} />}
                            color={Colors.white}
                            backgroundColor="#5820CF"
                            size="sm"
                            css={css`
                              width: 100%;
                              display: flex;
                              justify-content: flex-start;
                              margin-bottom:6px;
                            `}
                          >
                            <span>타임딜 종료까지</span>
                            <span
                              css={css`
                                position: absolute;
                                right: 5px;
                              `}
                            >
                              00:00:00
                            </span>
                          </Badge>
                          <Caption1 fontWeight={600} color={Colors.gray900}>
                            {item.creator}
                          </Caption1>
                        </>
                      }
                      extraBottom={
                        <div style={{ marginLeft: "-4px", lineHeight: "0" }}>
                          <Badge
                            icon={<Icon.Heart fillColor={Colors.gray400} />}
                            backgroundColor="transparent"
                            color={Colors.gray400}
                            size="sm"
                          >
                            {item.like}
                          </Badge>{" "}
                          <Badge
                            icon={<Icon.Like fillColor={Colors.gray400} />}
                            backgroundColor="transparent"
                            color={Colors.gray400}
                            size="sm"
                          >
                            {item.thumsUp}%
                          </Badge>
                        </div>
                      }
                    >
                      <CardPrice
                        salePrice={item.price.salePrice}
                        originalPrice={item.price.originalPrice}
                        installment={item.price.installment}
                      ></CardPrice>
                      <Badge
                        color={Colors.white}
                        backgroundColor="#5820CF"
                        css={css`
                          position: absolute;
                          top: 10px;
                          left: 10px;
                        `}
                      >
                        {item.coupon}만원 쿠폰
                      </Badge>
                      <Icon.HeartOutline
                        size={24}
                        fillColor={Colors.white}
                        css={css`
                          position: absolute;
                          top: 7px;
                          right: 7px;
                          padding: 5px 4px 3px 5px;
                          border-radius: 50px;
                          &:hover {
                            background: #ffffff44;
                            transition: all 0.3s;
                          }
                        `}
                      />
                    </Card>
                  );
                }}
              />
            </Section>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default App;
