import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Colors,
  Input,
  Button,
  ButtonSize,
  ButtonColor,
  Icon,
} from "@class101/ui";

function HeaderSearch() {
  return (
    <div
      css={css`
        position: relative;
        flex: 1 1 0%;
      `}
    >
      <input
        placeholder="찾으시는 취미가 있으신가요?"
        css={css`
          font-size: 14px;
          font-weight: normal;
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;
          width: 100%;
          padding: 12px 52px 12px 16px;
          background: rgb(248, 248, 249);
          border: 1px solid rgb(248, 248, 249);
          box-sizing: border-box;
          border-radius: 24px;
          text-align: left;
          color: rgb(26, 26, 26);
        `}
      />
      <button
        css={css`
          border: none;
          outline: none;
          padding: 0px;
          background-color: transparent;
          position: absolute;
          right: 20px;
          cursor: pointer;
          top: 50%;
          width: 20px;
          height: 20px;
          transform: translateY(-50%);
        `}
      >
        <Icon.Search fillColor={Colors.black} size={20} />
      </button>
    </div>
  );
}

export default HeaderSearch;
