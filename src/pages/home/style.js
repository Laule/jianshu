import styled from 'styled-components';


export const HomeWrapper = styled.div`
      width:960px;
      margin:0 auto;
      overflow:hidden;
      
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
      width:240px;
`

export const TopicWrapper = styled.div`
      padding:20px 0 10px 0;
      overflow:hidden;
      margin-left:-10px;
`
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
      .topic-pic
      {
         display:block;
         float:left;
         width:32px;
         height:32px;
         margin-right:10px;
      }
`