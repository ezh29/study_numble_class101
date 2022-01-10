import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface PostTIleTitleProps {
   
    creator: string;
    title: string;
   
  }
function PostTIleTitle(props:PostTIleTitleProps) {
    return (
        <>
         <span
        css={css`
          font-size: 0.6875rem;
          line-height: 0.875rem;
          font-weight: 700;
          color: #000000;
        `}
      >
        {props.creator}
      </span>
      <span
        css={css`
          font-size: 14px;
          font-weight: normal;
          line-height: 20px;
          letter-spacing: -0.15px;
          color: rgb(26, 26, 26);
          height: 40px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin: 4px 0px 8px;
        `}
      >
        {props.title}
      </span>
        </>
    )
}

export default PostTIleTitle
