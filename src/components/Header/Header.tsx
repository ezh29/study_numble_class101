import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeaderMenu from "../Header/HeaderMenu";
import HeaderLogo from "../Header/HeaderLogo";
import HeaderSearch from "../Header/HeaderSearch";
import HeaderSubMenu from "../Header/HeaderSubMenu";
import HeaderNav from "./HeaderNav";

interface HeaderProps {
  isPc: boolean;
  isTablet: boolean;
  isMobile: boolean;
}
function Header({ isPc, isTablet, isMobile }: HeaderProps) {
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
        {isPc && <HeaderMenu />}
        <HeaderSearch isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
        {isPc && <HeaderSubMenu />}
      </div>
      <HeaderNav isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
    </>
  );
}

export default Header;
