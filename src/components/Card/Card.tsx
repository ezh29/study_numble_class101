import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CardLikethumsup from "./CardLikethumsup";
import CardPrice from "./CardPrice";
import CardImg from "./CardImg";
import CardTitle from "./CardTitle";

interface PostTileProps {
  img: string;
  coupon: number;
  creator: string;
  title: string;
  like: number;
  thumsUp: number;
  salePrice: number;
  originalPrice: number;
  installment: number;
}

function PostTile(props: PostTileProps) {
  return (
    <div css={css`
    cursor: pointer;
    `}>
      <CardImg img={props.img} coupon={props.coupon}></CardImg>
      <CardTitle
        title={props.title}
        creator={props.creator}
      ></CardTitle>
      <CardLikethumsup
        like={props.like}
        thumsUp={props.thumsUp}
      ></CardLikethumsup>
      <CardPrice
        salePrice={props.salePrice}
        originalPrice={props.originalPrice}
        installment={props.installment}
      ></CardPrice>
    </div>
  );
}

export default PostTile;
