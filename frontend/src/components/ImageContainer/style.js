import { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';


//~~~~~~~~~~~~ styled-components ~~~~~~~~~~~~~//

export const ImageWrapper=styled.div`
  border: 1px solid var(--bg-accent);
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
  -moz-border-radius: var(--border-radius);

  width: 100%;
  height: 100%;
  background: var(--bg);
  overflow-x: hidden;
  overflow-y: hidden;
`;


export const StyledImage=styled.div`
  img {
    width: 100%;
    animation: ${({dims})=>CreateAnim({dims})} 4s ease-in-out infinite;
    image-rendering: optimizeSpeed;             /*                     */
    image-rendering: -moz-crisp-edges;          /* Firefox             */
    image-rendering: -o-crisp-edges;            /* Opera               */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and Safari) */
    image-rendering: pixelated;                 /* Chrome as of 2019   */
    image-rendering: optimize-contrast;         /* CSS3 Proposed       */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                */
  }
`;


//~~~~~~~~~~~~ special function ~~~~~~~~~~~~~//
// this function is used to calculate viewport height of entire image so we can traverse the full length using css translateY();

const CreateAnim=({dims})=>{

  const [ viewportImageDims, setViewportImageDims ] = useState({width: 0, height: 0});

  useEffect(()=>{
    const originalImageWidth = 16;
    const originalImageHeight = 2048;
    const widthRatio = dims.width/originalImageWidth;
    console.log("widthRatio: ", widthRatio)
  }, [dims]);

  return (
    keyframes`
    	0% {
    		transform: translateY(-4096px);
    	}
    	100% {
    		transform: translateY(0px);
    	}
    `);
};
