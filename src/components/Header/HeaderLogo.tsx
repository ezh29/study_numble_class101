import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function HeaderLogo() {
  return (
    <a
      css={css`
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 24px;

        margin-right: 28px;
      `}
      href="/index"
    >
      <Logo />
    </a>
  );
}

export default HeaderLogo;
