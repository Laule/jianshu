import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
      height:56px;
      border-bottom:1px solid #e7e7e7;
      position: fixed;
      right: 0;
      left: 0;
      z-index: 1030;
      background:#ffffff;
`;
export const HeaderContainer = styled.div`
    height:56px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    position:relative;
`;


export const Logo = styled.div`
 position:absolute;
 top:0;
 left:0;
 display:block;
 width:100px;
 height:56px;
 background:url(${logoPic});
 background-size:contain;
`;

export const Nav = styled.div`
 width:960px;
 height:100%;
 padding-right:70px;
 box-sizing:border-box;
 margin:auto;
`;

export const NavItem = styled.div`
 line-height:56px;
 padding:0px 15px;
 color:#333333;
 &.left {
    float:left;
    .home-nav-icon
    {
      font-size:20px;
      margin-right:2px;
    }
    .home-nav-download
    {
      font-size:20px;
      margin-right:2px;
    }
 }
 &.right{
    float:right;
    color:#969696;
    .home-read-type{
     font-size:20px;
    }
    .home-nav-diam{
     height:25px;
     padding-top:15px;
    }
 }
 &.active{
    color:#ea6f5a;
 }
`;
export const SearchWrapper = styled.div`
position:relative;
float:left;
z-index:99999;
.zoom{
position:absolute;
right:4px;
bottom:4px;
width:30px
height:30px;
border-radius:15px;
line-height:30px;
text-align:center;
cursor:pointer;
&.focused {
color:#fff;
background:#969696;
}
}
`;

export const SearchHot = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
background:#ffffff;
box-shadow:0 0 8px rgba(0,0,0,.2);
`;
export const SearchHotTitle = styled.div`
margin-top:20px;
color:#969696;
margin-bottom:15px;
line-height:20px;
font-size:14px;
`;

export const SearchHotSwitch = styled.span`
float:right;
font-size:13px;
cursor:pointer;
.spin
{
display:block;
float:left;
font-size:12px;
margin-right:2px;
transition:all .3s ease-in;
transform-origin:center center;
}
`;
export const SearchHotItem = styled.a`
display:block;
float:left;
font-size:12px;
padding:0 5px;
line-height:20px;
border:1px solid #ddd;
color:#787878;
cursor:pointer;
border-radius:3px;
margin-right:10px;
margin-bottom:10px;
`;
export const SearchHotList = styled.div`
overflow:hidden;
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width:240px;
height:38px;
padding:0 30px 0 20px;
margin-left:20px;
margin-top:9px;
box-sizing: border-box;
border: none;
outline: none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&::placeholder {
color:#999
}
&.focused{
width:320px;
}
&.slide-enter{
transition:all .3s ease-out;
}
&.slide-enter-active{
width:320px;
}

&.slide-exit{
transition:all .3s ease-out;
}
&.slide-exit-active{
width:240px;
}
`;

export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px
`;

export const Button = styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
color:#ec6149
}
&.writting {
color:#ffffff
background:#ec6149
}
`;
