import styled, { keyframes, css } from 'styled-components';

export const Container=styled.div`
  border: 1px solid var(--bg-accent);
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
  -moz-border-radius: var(--border-radius);

  background: var(--bg);
  height: 50%;
  overflow-x: hidden;
  overflow-y: hidden;
  max-width: 500px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

// TODO: use calc() for scaling image and translationY in px;
const imageAnim = keyframes`
	0% {
		transform: translateY(-4096px);
	}
	100% {
		transform: translateY(0px);
	}
`;

export const StyledImage=styled.div`
  img {
    width: 220px;
    animation: ${imageAnim} 4s ease-in-out infinite;

    image-rendering: optimizeSpeed;             /*                     */
    image-rendering: -moz-crisp-edges;          /* Firefox             */
    image-rendering: -o-crisp-edges;            /* Opera               */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and Safari) */
    image-rendering: pixelated;                 /* Chrome as of 2019   */
    image-rendering: optimize-contrast;         /* CSS3 Proposed       */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                */
  }
`;

// css source: // https://superuser.com/questions/530317/how-to-prevent-chrome-from-blurring-small-images-when-zoomed-in