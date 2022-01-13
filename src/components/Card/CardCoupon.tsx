import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Badge, Colors } from "@class101/ui";

interface CardCouponProps {
  coupon: number;
}

const setBackgroundColor = (coupon: number) => {
  if (coupon <= 3) {
    return "#F3213B";
  } else if (coupon > 3) {
    return "#5820CF";
  }
};

function CardCoupon({ coupon }: CardCouponProps) {
  return (
    <Badge
      color={Colors.white}
      backgroundColor={setBackgroundColor(coupon)}
      css={css`
        position: absolute;
        top: 10px;
        left: 10px;
      `}
    >
      {coupon}만원 쿠폰
    </Badge>
  );
}

export default CardCoupon;
