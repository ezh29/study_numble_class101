import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HeaderNavDropDown from "./HeaderNavDropDown";
import HeaderNavBtnMain from "./HeaderNavBtnMain";
import HeaderNavBtnSub from "./HeaderNavBtnSub";
interface HeaderNavProps {
  isPc: boolean;
  isTablet: boolean;
  isMobile: boolean;
}
function HeaderNav({ isPc, isTablet, isMobile }: HeaderNavProps) {
  return (
    <div
      css={css`
        -webkit-box-pack: start;
        justify-content: flex-start;
        display: flex;
      `}
    >
      {isPc ? (
        <>
          <HeaderNavDropDown name="전체 카테고리" />
          <HeaderNavBtnMain name="새해 다짐 격파" dot={true} />
          <HeaderNavBtnMain name="1월 가입혜택" dot={true} />
          <HeaderNavBtnMain name="이벤트" />
          <HeaderNavBtnMain name="바로수강" />
          <HeaderNavBtnMain name="신규 클래스" />
          <HeaderNavBtnMain name="오픈 예정" />
          <>
            <div
              css={css`
                min-height: 30px;
                width: 1px;
                background-color: rgb(248, 248, 248);
                margin-bottom: 12px;
                margin-right: 30px;
              `}
            ></div>
            <HeaderNavBtnSub
              name="시그니처"
              isPc={isPc}
              isTablet={isTablet}
              isMobile={isMobile}
            />
            <HeaderNavBtnSub
              name="키즈"
              isPc={isPc}
              isTablet={isTablet}
              isMobile={isMobile}
            />
            <HeaderNavBtnSub
              name="원포인트 클래스"
              isPc={isPc}
              isTablet={isTablet}
              isMobile={isMobile}
            />
          </>
        </>
      ) : (
        <>
          <HeaderNavBtnSub
            name="전체 카테고리"
            isPc={isPc}
            isTablet={isTablet}
            isMobile={isMobile}
          />
          <HeaderNavBtnSub
            name="새해 다짐 격파"
            dot={true}
            isPc={isPc}
            isTablet={isTablet}
            isMobile={isMobile}
          />
          <HeaderNavBtnSub
            name="1월 가입혜택"
            dot={true}
            isPc={isPc}
            isTablet={isTablet}
            isMobile={isMobile}
          />
          <HeaderNavBtnSub
            name="이벤트"
            isPc={isPc}
            isTablet={isTablet}
            isMobile={isMobile}
          />
          <HeaderNavBtnSub
            name="바로수강"
            isPc={isPc}
            isTablet={isTablet}
            isMobile={isMobile}
          />
          <HeaderNavBtnSub
            name="신규 클래스"
            isPc={isPc}
            isTablet={isTablet}
            isMobile={isMobile}
          />
          <HeaderNavBtnSub
            name="오픈 예정"
            isPc={isPc}
            isTablet={isTablet}
            isMobile={isMobile}
          />
        </>
      )}
    </div>
  );
}

export default HeaderNav;
