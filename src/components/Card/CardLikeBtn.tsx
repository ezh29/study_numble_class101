import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon, Colors } from "@class101/ui";

function CardLikeBtn() {
  return (
    <Icon.HeartOutline
      size={24}
      fillColor={Colors.white}
      css={css`
        position: absolute;
        top: 7px;
        right: 7px;
        padding: 5px 4px 3px 5px;
        border-radius: 50px;
        &:hover {
          background: #ffffff44;
          transition: all 0.3s;
        }
      `}
    />
  );
}

export default CardLikeBtn;
