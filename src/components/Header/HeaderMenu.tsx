import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Colors, Subtitle1 } from "@class101/ui";

function HeaderMenu() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 36px;
      `}
    >
      <a
        href="/index"
        css={css`
          margin-right: 16px;
        `}
      >
        <Subtitle1 color={Colors.orange500}>클래스</Subtitle1>
      </a>
      <a href="/index">
        {" "}
        <Subtitle1 color={Colors.black}>스토어</Subtitle1>
      </a>
    </div>
  );
}

export default HeaderMenu;
