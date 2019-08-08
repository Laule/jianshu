import {createGlobalStyle} from 'styled-components';

export const GlobalIconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1565276954683'); /* IE9 */
  src: url('./iconfont.eot?t=1565276954683#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1565276954683') format('woff'),
  url('./iconfont.ttf?t=1565276954683') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1565276954683#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;