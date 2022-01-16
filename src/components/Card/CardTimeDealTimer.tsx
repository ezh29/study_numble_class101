import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Badge, Icon, Colors } from "@class101/ui";

function CardTimeDealTimer() {
  return (
    <Badge
      icon={<Icon.Timer fillColor={Colors.white} />}
      color={Colors.white}
      backgroundColor="#5820CF"
      size="sm"
      css={css`
        width: 100%;
        display: flex;
        justify-content: flex-start !important;
        margin-bottom: 6px;
      `}
    >
      <span>타임딜 종료까지</span>
      <span
        css={css`
          position: absolute;
          right: 5px;
        `}
      >
        00:00:00
      </span>
    </Badge>
  );
}

export default CardTimeDealTimer;
