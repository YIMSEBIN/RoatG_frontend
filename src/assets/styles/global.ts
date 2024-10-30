import { css } from "@emotion/react";
import SpoqaHanSansNeoLight from "@assets/fonts/SpoqaHanSansNeo-Light.ttf";
import SpoqaHanSansNeoRegular from "@assets/fonts/SpoqaHanSansNeo-Regular.ttf";
import SpoqaHanSansNeoMedium from "@assets/fonts/SpoqaHanSansNeo-Medium.ttf";
import SpoqaHanSansNeoBold from "@assets/fonts/SpoqaHanSansNeo-Bold.ttf";

const globalFontStyle = css`
  * {
    font-family: "SpoqaHanSansNeoRegular";
  }
`;

const fontFamily = css`
  @font-face {
    font-family: "SpoqaHanSansNeoLight";
    src: url(${SpoqaHanSansNeoLight}) format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoRegular";
    src: url(${SpoqaHanSansNeoRegular}) format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoMedium";
    src: url(${SpoqaHanSansNeoMedium}) format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoBold";
    src: url(${SpoqaHanSansNeoBold}) format("truetype");
  }
`;

export const globalStyle = css`
  ${globalFontStyle};
  ${fontFamily}
`;
