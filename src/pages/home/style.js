import styled from 'styled-components';


export const HomeWrapper = styled.div`
      width:960px;
      margin:0 auto;
      overflow:hidden;
      padding-top:56px;
`;
export const HomeLeft = styled.div`
      float:left;
      margin-left:15px;
      padding-top:30px;
      width:625px;
      .banner-img
      {
        width:625px;
        height: 270px;
      }
`;
export const HomeRight = styled.div`
      float:right;
      width:280px;
`;

export const TopicWrapper = styled.div`
      padding:20px 0 10px 0;
      overflow:hidden;
      margin-left:-10px;
      border-bottom:1px solid #dcdcdc;
`;
// 内层的元素是浮动的，外层需要加一个overflow:hidden,
// 触发它的BFC，让它的高度能够自动适应内部的高度
export const TopicItem = styled.div`
      float:left;
      background:#f7f7f7;
      height:32px;
      line-height:32px;
      margin-left:16px;
      font-size:14px;
      color:#000;
      border:1px solid #dcdcdc;
      border-radius:4px;
      padding-right:10px;
      margin-bottom:18px;
      cursor: pointer;
      .topic-pic
      {
         display:block;
         float:left;
         width:32px;
         height:32px;
         margin-right:10px;
      }
`;
export const TopicItemMore = styled.a`
      float:left;
      height:32px;
      line-height:32px;
      margin-left:16px;
      font-size:14px;
      color:#000;
      border-radius:4px;
      padding-right:10px;
      margin-bottom:18px;
      cursor: pointer;
`;
export const ListWrapper = styled.div`
      margin-top:25px;
      a{
        text-decoration: none;
      }
`;

export const ListItem = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
  .list-pic{
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    vertical-align: middle;
   }
`;
export const ListInfo = styled.div`
    padding-right: 165px;
    .title{
    color: #333333;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    }
    .desc{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
   }
   .meta{
      padding-right: 0!important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      span{
      margin-right: 10px;
      color: #b4b4b4;
      }
    .jsd-meta{
      color: #ea6f5a!important;
      .icon-diamond{
       font-size:14px;
       font-size: 18px;
       vertical-align: -2px;
      }
     }
    .nickname{
      color: #b4b4b4;
    }
    .comments{
     color: #b4b4b4;
     .icon-message{
       font-size: 13px;
       padding-right: 4px;
     }
    }
    .like{
    .icon-like{
    font-size: 15px;
    padding-right: 4px;
    vertical-align: -2px;
    }
    }
   }
`;

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    padding: 30px 0 0;
`;
export const RecommendItem = styled.div`
height:50px;
background:url(${(props) => props.imgUrl});
width:280px;
background-size: contain;
margin-bottom: 6px;
border-radius: 4px;
`;
export const DownloadWrapper = styled.div`
background:red;
margin-bottom: 30px;
padding: 10px 22px;
width: 100%;
border: 1px solid #f0f0f0;
border-radius: 6px;
background-color: #fff;
box-sizing: border-box;
.info
{
    vertical-align: middle;
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title
    {
        font-size: 15px;
        color: #333;
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
}

.pic-qrcode{
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
}
`;


export const WriterWrapper = styled.div`
width:278px;
border-radius:3px;
box-sizing: border-box;
`;
export const Advertisement = styled.a`
    position: relative;
    border-radius: 4px;
    display: block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 160px;
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: RGB(241, 243, 244);
    cursor: pointer;
    background:url(${(props) => props.imgUrl});
    background-size: contain;
   .ad-badge 
   {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: #000;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.7;
    }
`;
export const WriterInfo = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    overflow: hidden;
    vertical-align: middle;
    cursor: pointer;
`;
export const WriterTitle = styled.div`
    text-align: left;
    span{
        font-size: 14px;
        color: #969696;
    }
`;
export const WriteSwitch = styled.div`
    float: right;
    display: inline-block;
    font-size: 14px;
    color: #969696;
    .spin{
       margin-right: 4px;
       display:block;
       float:left;
       transition:all .3s ease-in;
       transform-origin:center center;
    }
`;

export const WriterList = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    padding-left: 0;
`;
export const WriterItem = styled.li`
     margin-top: 15px;
     line-height: 20px;
     .avatar
     {
       float: left;
       width: 48px;
       height: 48px;
       margin-right: 10px;
      img{
       width: 100%;
       height: 100%;
       border: 1px solid #ddd;
       border-radius: 50%;
       vertical-align: middle;
       }
     }
     .follow{
       float: right;
       margin-top: 5px;
       padding: 0;
       font-size: 13px;
       color: #42c02e;
       border-color: #42c02e;
       font-weight: 400;
       line-height: normal;
       text-decoration: none;
      }
      .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        text-decoration: none;
        color:#333;
      }
      .work-like
      {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
        margin: 0 0 10px;
      }
`;
export const WriterMore = styled.a`
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    display:block;
    box-sizing: border-box;
`;

export const LoadMore = styled.div`
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
margin:30px 0;
text-align:center;
border-radius:20px;
color:#ffffff;
cursor:pointer;
`;

export const BackTop = styled.div`
position:fixed;
right:40px;
bottom:40px; 
font-size:14px;
width:50px;
height:50px;
line-height:50px;
text-align:center;
border:1px solid #ccc;
cursor: pointer;
`;