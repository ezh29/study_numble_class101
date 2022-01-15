import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface HeaderNavBtnSubProps {
  name: string;
}
function HeaderNavBtnSub({ name }: HeaderNavBtnSubProps) {
  return (
    <button
      css={css`
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
        margin: 0px 28px 0px 0px;
        display: flex;
        position: relative;
        box-sizing: border-box;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 8px 0px 20px;
        white-space: nowrap;
        cursor: pointer;
        color: rgb(26, 26, 26);
        &:hover {
          font-weight: bold;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 1rem;
            height: 2px;
            width: calc(100%);
            background: #000;
          }
        }
      `}
    >
      {name}
    </button>
  );
}

export default HeaderNavBtnSub;
