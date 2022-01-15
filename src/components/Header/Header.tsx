import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeaderMenu from "../Header/HeaderMenu";
import HeaderLogo from "../Header/HeaderLogo";
import HeaderSearch from "../Header/HeaderSearch";
import HeaderSubMenu from "../Header/HeaderSubMenu";
import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <>
      <div
        css={css`
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          padding: 20px 0px;
          width: 100%;
        `}
      >
        <HeaderLogo />
        <HeaderMenu />
        <HeaderSearch />
        <HeaderSubMenu />
      </div>
      <HeaderNav />
    </>
  );
}

export default Header;
