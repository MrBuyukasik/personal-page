/* eslint-disable no-unused-vars */
import { css } from "styled-components";
import { generateMedia } from "styled-media-query";

export enum ScreenTypes {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
  Smallest = "smallest",
}

export const breakpoints: Record<ScreenTypes, number> = {
  [ScreenTypes.Smallest]: 320,
  [ScreenTypes.Mobile]: 450,
  [ScreenTypes.Tablet]: 768,
  [ScreenTypes.Desktop]: 1200,
};

export const window: Record<ScreenTypes, string> = {
  [ScreenTypes.Smallest]: `${breakpoints[ScreenTypes.Smallest]}px`,
  [ScreenTypes.Mobile]: `${breakpoints[ScreenTypes.Mobile]}px`,
  [ScreenTypes.Tablet]: `${breakpoints[ScreenTypes.Tablet]}px`,
  [ScreenTypes.Desktop]: `${breakpoints[ScreenTypes.Desktop]}px`,
};

export const mediaQuery = generateMedia({
  smallest: `${breakpoints.smallest}px`,
  mobile: `${breakpoints.mobile}px`,
  tablet: `${breakpoints.tablet}px`,
  desktop: `${breakpoints.desktop}px`,
});

export const smallScreen = (...args: any) => css`
  ${mediaQuery.lessThan("desktop")`
        ${css(args)}
    `}
`;
