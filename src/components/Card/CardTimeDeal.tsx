import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Caption1, Badge, Icon, Colors } from "@class101/ui";
import CardTimeDealTimer from "./CardTimeDealTimer";
import CardPrice from "./CardPrice";
import CardLikeAndThumsUp from "./CardLikeAndThumsUp";
import CardCoupon from "./CardCoupon";
import CardLikeBtn from "./CardLikeBtn";

interface postData {
  title: string;
  img: string;
  creator: string;
  salePrice: number;
  originalPrice: number;
  installment: number;
  thumsUp: number;
  like: number;
  coupon: number;
}

function CardTimeDeal({
  title,
  img,
  creator,
  salePrice,
  originalPrice,
  installment,
  thumsUp,
  like,
  coupon,
}: postData) {
  return (
    <Card
      to={"/"}
      title={title}
      coverImage={img}
      extraTop={
        <>
          <CardTimeDealTimer />
          <Caption1 fontWeight={600} color={Colors.gray900}>
            {creator}
          </Caption1>
        </>
      }
      extraBottom={
        <div style={{ marginLeft: "-4px", lineHeight: "0" }}>
          <CardLikeAndThumsUp like={like} thumsUp={thumsUp} />
        </div>
      }
    >
      {salePrice && (
        <CardPrice
          salePrice={salePrice}
          originalPrice={originalPrice}
          installment={installment}
        ></CardPrice>
      )}
      {coupon && <CardCoupon coupon={coupon} />}
      <CardLikeBtn />
    </Card>
  );
}

export default CardTimeDeal;
