import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdFavoriteBorder } from "react-icons/md";

interface TileImgProps {
  img: string;
  coupon: number;
}

function TileImg(props: TileImgProps) {
  return (
    <div
      css={css`
      border-radius: 7px;
      overflow: hidden;
      background-color: red;
      padding-top: 75%;
      position: relative;

      `}
    >
      <img
        css={css`
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        position: absolute;
          &:hover {
            transform: scale(1.1);
            transform-origin: center center;
            transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
          }
        `}
        src={props.img}
        alt=""
      />
      <div
        css={css`
          background-color: rgb(88, 32, 207);
          color: rgb(255, 255, 255);
          padding: 6px 8px;
          border-radius: 2px;
          font-size: 11px;
          font-weight: 600;
          position: absolute;
          top: 10px;
          left: 10px;
        `}
      >
        {props.coupon}만원 쿠폰
      </div>
      <div
        css={css`
          font-size: 25px;
          color: #fff;
          position: absolute;
          right: 10px;
          top: 5px;
        `}
      >
        <MdFavoriteBorder css={css`
        transition: all 0.2s;
        padding: 5px;
        border-radius: 50px;
         &:hover{
          background-color:#ffffff33
        }
        `} />
      </div>
    </div>
  );
}

export default TileImg;
