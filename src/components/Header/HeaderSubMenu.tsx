import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function HeaderSubMenu() {
  return (
    <div
      css={css`
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        -webkit-box-flex: 1;
        flex-grow: 1;
        font-size: 14px;
      `}
    >
      <a
        href="/index"
        css={css`
          margin-right: 24px;
          color: #000;
        `}
      >
        크리에이터 지원
      </a>
      <a
        href="/index"
        css={css`
          margin-right: 24px;
          color: #000;
        `}
      >
        기업교육
      </a>
      <a
        href="/index"
        css={css`
          color: #000;
        `}
      >
        로그인
      </a>
    </div>
  );
}

export default HeaderSubMenu;
