import {createGlobalStyle} from 'styled-components';

export const GlobalIconFont = createGlobalStyle`

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1565231934294'); /* IE9 */
  src: url('./iconfont.eot?t=1565231934294#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1565231934294') format('woff'),
  url('./iconfont.ttf?t=1565231934294') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1565231934294#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;