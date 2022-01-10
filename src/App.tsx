import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import { Grid, Row, Col, Section, GridList } from "@class101/ui";
import axios from "axios";

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
      <Grid>
        <Row>
          <Col lg={12}>
            <Section title="오늘의 특가! TILE DEAL" to="/">
              <GridList
                items={postData}
                smColumn={2}
                lgColumn={4}
                renderItem={(item) => {
                  return (
                    <Card title={item.title} img={item.img} coupon={item.coupon} creator={item.creator} like={item.like} thumsUp={item.thumsUp} salePrice={item.price.salePrice} originalPrice={item.price.originalPrice} installment={item.price.installment}></Card>
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
