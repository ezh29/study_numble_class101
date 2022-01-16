import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface GridProps {
  children: React.ReactNode;
}
function Grid({ children }: GridProps) {
  return (
    <div
      css={css`
        max-width: 1176px;
        margin: 0 auto;
        padding: 0px 24px;
        position: relative;
        overflow: hidden;
      `}
    >
      {children}
    </div>
  );
}

export default Grid;
