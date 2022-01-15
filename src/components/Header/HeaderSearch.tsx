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
      <Input
        placeholder="찾으시는 취미가 있으신가요?"
        css={css`
          font-size: 14px;
          font-weight: normal;
          line-height: 20px;
          letter-spacing: -0.15px;
          margin: 0px;
          width: 100%;
          background: rgb(248, 248, 249);
          border: 1px solid rgb(248, 248, 249);
          box-sizing: border-box;
          border-radius: 24px;
          text-align: left;
          color: rgb(26, 26, 26);
          width: 420px;
        `}
      />
      <Button
        size={ButtonSize.LARGE}
        color={ButtonColor.ORANGE}
        css={css`
          border: none;
          outline: none;
          padding: 0px;
          background-color: transparent;
          position: absolute;
          right: 16px;
          cursor: pointer;
          top: calc(50% - 10px);
          width: 20px;
          height: 20px;
        `}
      >
        <Icon.Search fillColor={Colors.black} />
      </Button>
    </div>
  );
}

export default HeaderSearch;
