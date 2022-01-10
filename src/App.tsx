import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid, Row, Col,Section,GridList } from "@class101/ui";

function App() {
  return (
    <>
      <Grid>
        <Row>
          <Col lg={12}>
          <Section title="가장 완강률이 높은 클래스" to="/">
              <GridList
                items={[
                  {
                    "id": 1,
                    "title": "허리 건강을 지키는 스트레칭",
                    "creator": "테트리스",
                    "img": "https://images.velog.io/images/kados22/post/e879bc6c-27a1-4dce-affc-927894657cc7/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB%20Class%20Card%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%201.png",
                    "like": 101,
                    "thumsUp": 99,
                    "price": {
                      "originalPrice": 292000,
                      "salePrice": 204000,
                      "installment": 5
                    },
                    "coupon": 6
                  }
                ]}
                smColumn={2}
                renderItem={item => {
                  const title:string = item.title
                  const image:string = item.img
                  // const { title, image } = item.time_deal
                  return (
                    <div>
                      <div>
                        <img style={{ width: '100%' }} src={image} alt={title} />
                      </div>
                      <div>{title}</div>
                    </div>
                  )
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
