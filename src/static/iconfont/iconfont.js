import {createGlobalStyle} from 'styled-components';

export const GlobalIconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1566097410170'); /* IE9 */
  src: url('./iconfont.eot?t=1566097410170#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1566097410170') format('woff'),
  url('./iconfont.ttf?t=1566097410170') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1566097410170#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;