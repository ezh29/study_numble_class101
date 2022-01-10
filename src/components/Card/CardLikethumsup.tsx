import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdFavorite, MdThumbUp } from "react-icons/md";

interface LikethumsupProps {
  like: number;
  thumsUp: number;
}

function Likethumsup(props: LikethumsupProps) {
  return (
    <div
      css={css`
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      `}
    >
      <span
        css={css`
          font-size: 11px;
          font-weight: normal;
          line-height: 16px;
          letter-spacing: normal;
          margin: 0px 8px 0px 0px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          color: rgb(162, 162, 162);
        `}
      >
        <MdFavorite
          css={css`
            color: #d7d7d7;
            margin-right: 2px;
          `}
        />
        {props.like.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <span
        css={css`
          font-size: 11px;
          font-weight: normal;
          line-height: 16px;
          letter-spacing: normal;
          margin: 0px 8px 0px 0px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          color: rgb(162, 162, 162);
        `}
      >
        <MdThumbUp
          css={css`
            color: #d7d7d7;
            margin-right: 2px;
          `}
        />
        {props.thumsUp}%
      </span>
    </div>
  );
}

export default Likethumsup;
