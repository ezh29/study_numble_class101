import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


interface TilePriceProps {
  salePrice: number;
  originalPrice: number;
  installment: number;
}
function TilePrice(props: TilePriceProps) {
  return (
    <>
      <div
        css={css`
          flex: none;
          background-color: #fafafa;
          width: 100%;
          height: 1px;
          margin-top: 8px;
          margin-bottom: 8px;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <span
          css={css`
            font-size: 0.8125rem;
            line-height: 1.125rem;
            font-weight: 700;
            color: #fd3049;
            margin-right: 4px;
          `}
        >
          {Math.floor((props.salePrice / props.originalPrice) * 100)}%
        </span>
        <span
          css={css`
            font-size: 0.8125rem;
            line-height: 1.125rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-right: 8px;
          `}
        >
          월{" "}
          {props.salePrice
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          원
        </span>
        <span
          css={css`
            font-size: 0.6875rem;
            line-height: 0.875rem;
            font-weight: 400;
            color: #a2a2a2;
          `}
        >
          ({props.installment}개월)
        </span>
      </div>
    </>
  );
}

export default TilePrice;
