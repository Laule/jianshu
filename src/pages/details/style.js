import styled from 'styled-components';


export const Note = styled.div`
    position: relative;
    padding-top: 56px;
    box-sizing: border-box;
`;

export const DetailWrapper = styled.div`
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 40px;
    width: 620px;
    .note-ad{
    display: block;
    width: 100%;
    vertical-align: middle;
    border:0;
    }
    
`;
export const ArticleContainer = styled.div`
    
`;
export const ArticleTitle = styled.h1`
    word-break: break-word!important;
    margin: 20px 0 0;
    font-size: 34px;
    font-weight: 400;
    line-height: 1.3;
`;

export const ArticleAuthor = styled.div`
    margin: 30px 0 40px;
    .avatar{
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 50%;
    }
`;

export const ArticleInfo = styled.div`
    vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
    .nickname{
    margin-right: 3px;
    font-size: 16px;
    vertical-align: middle;
    }
    .badge-icon{
    margin-right: 5px;
    width: 20px;
    height: 20px;
    border-radius: 0;
    border: 0;
    vertical-align: middle;
    }
    .follow{
    border-color: #42c02e;
    padding: 0 7px 0 5px;
    font-size: 12px;
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    font-weight: 400;
    line-height: normal;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    user-select: none;
    }
    .meta{
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
    span{
        padding-right: 5px;
    }
    .jsd-meta{
    .icon-diamond{
    vertical-align: -4px;
   font-size:21px;
    }
        color: #ea6f5a!important;
    }
    }
`;
export const ArticleContent = styled.div`
    color: #2f2f2f;
    word-break: break-word!important;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    p{
    margin: 0 0 25px;
    }
`;
export const SupportAuthor = styled.div`
    min-height: 144px;
    padding: 20px 0;
    text-align: center;
    clear: both;
    p{
    padding: 0 30px;
    margin-bottom: 20px;
    min-height: 24px;
    font-size: 17px;
    font-weight: 700;
    color: #969696;
    margin: 0 0 10px;
    }
    .btn-pay{
    margin-bottom: 20px;
    padding: 8px 25px;
    font-size: 16px;
    color: #fff;
    background-color: #ea6f5a;
    border-radius: 20px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.42857;
    }
    .supporter{
        height: 50px;
     }
`;
export const ArticleFooterInfo = styled.div`
    margin-bottom: 30px;
    .notebook{
    font-size: 12px;
    color: #c8c8c8;
    }
    .copyright{
    float: right;
    margin-top: 5px;
    font-size: 12px;
    line-height: 1.7;
    color: #c8c8c8;
    }
    .report-note{
    float: right;
    margin-top: 5px;
    margin-right: 20px;
    font-size: 12px;
    line-height: 1.7;
    color: #c8c8c8;
    }
`;

export const AuthorDescription = styled.div.attrs({
    id:'author_desc'
})`
    padding: 20px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;
    .info
    {
    min-height: 47px;
    .avatar{
    float: left;
    margin-right: 10px;
    width: 48px;
    height: 48px;
    display: block;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
    }
    .follow{
    float: right;
    margin-top: 4px;
    padding: 8px 0;
    width: 100px;
    font-size: 16px;
    border-color: #42c02e;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    }
    .nickname{
    margin-right: 3px;
    font-size: 17px;
    line-height: 1.8;
    vertical-align: middle;
    color:#333;
    }
    .badge-icon{
    margin-right: 3px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    border: 0;
    }
    .icon-man
    {
    font-size: 15px;
    vertical-align: middle;
    color: #3194d0;
    }
    p{
    margin-bottom: 0;
    color: #969696;
    margin: 0 0 10px;
    }
    }
    .signature{
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e1e1e1;
    color: #969696;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
`;

export const ArticleLikeShare = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    .like
    {
      display: inline-block;
    .like-btn-group{
      position: relative;
      padding: 13px 0 15px 0;
      font-size: 0;
      border: 1px solid #EA6F5A;
      border-radius: 40px;
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      white-space: nowrap;
      line-height: 1.42857;
      user-select: none;
      .btn-like{
      display: inline-block;
      font-size: 19px;
      span{
      position: relative;
      padding: 18px 30px 18px 25px;
      color: #EA6F5A;
      text-decoration: none;
      .icon-like{
        font-size:20px;
        padding-right:5px;
      }
      }
      }
      
      .like-number{
      font-size: 18px;
      border-left: 1px solid rgba(236, 97, 73, 0.4);
      display: inline-block;
      margin-left: -15px;
      span{
      color: #EA6F5A;
      padding: 18px 26px 18px 18px;
      text-decoration: none;
      }
      }
      }
    }
    
    .share-group{
        float: right;
        margin-top: 6px;
        .share-circle{
        width: 50px;
        height: 50px;
        margin-left: 5px;
        text-align: center;
        border: 1px solid #dcdcdc;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
        position: relative;
        i{
        margin-top: 10px;
        font-size: 24px;
        line-height: 2;
        }
        .icon-weixin{
         color: #00bb29;
        }
        .icon-weibo{
            color: #e05244;
        }
        .icon-xiance
        {
            color: #9b9b9b;
        }
        }
        
        .more-share{
         width: auto;
         padding: 4px 18px;
         font-size: 14px;
         color: #9b9b9b;
         line-height: 40px;
         border-radius: 50px;
         height:40px;
        }
        
    }
`;

export const ArticleComment = styled.div`
         padding-top: 20px;
         box-sizing: border-box;
`;
export const CommentContainer = styled.div`
         
`;
export const NewComment = styled.form`
         position: relative;
         margin-left: 48px;
         margin: 0 0 20px;
         .avatar{
         margin-right: 10px;
         width: 38px;
         height: 38px;
         vertical-align: middle;
         display: inline-block;
         img{
         width: 100%;
         height: 100%;
         border: 1px solid #ddd;
         border-radius: 50%;
         vertical-align: middle;
        }
       }
       .sign-container{
         box-sizing: border-box;
         text-align: center;
         padding: 10px 15px;
         width: 572px;
         height: 80px;
         font-size: 13px;
         border: 1px solid #dcdcdc;
         border-radius: 4px;
         background-color: hsla(0,0%,71%,.1);
         resize: none;
         display: inline-block;
         vertical-align: top;
         outline-style: none;
         .btn-sign{
         width: 78px;
         margin: 11px 10px 0 0;
         padding: 7px 18px;
         font-size: 16px;
         border: none;
         border-radius: 20px;
         color: #fff!important;
         background-color: #3194d0;
         outline: none;
         display: inline-block;
         font-weight: 400;
         text-align: center;
         vertical-align: middle;
         touch-action: manipulation;
         cursor: pointer;
         background-image: none;
         white-space: nowrap;
         line-height: 1.42857;
         user-select: none;
         }
         .sign-text{
         font-size: 14px;
         vertical-align: -7px;
         }
       }
`;

export const CommentList = styled.div`
         margin-top: 30px;
`;
export const CommentTitle = styled.div`
         padding-bottom: 20px;
         font-size: 17px;
         font-weight: 700;
         border-bottom: 1px solid #f0f0f0;
         box-sizing: border-box;
         .comment-num{
             vertical-align: middle;
         }
         .author-only{
          margin-left: 10px;
          padding: 4px 8px;
          font-size: 12px;
          color: #969696;
          border: 1px solid #e1e1e1;
          border-radius: 12px;
         }
         .pull-right{
           float: right!important;
           a{
           margin-left: 10px;
           font-size: 12px;
           font-weight: 400;
           color: #969696;
           display: inline-block;
           text-decoration: none;
           }
           .active{
           color: #2f2f2f;
           }
         }
`;
export const CommentItem = styled.div`
    padding: 20px 0 30px;
    border-bottom: 1px solid #f0f0f0;
    .author{
        margin-bottom: 15px;
    }
    .avatar{
    margin-right: 5px;
    width: 38px;
    height: 38px;
    vertical-align: middle;
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
    }
    .info{
    display: inline-block;
    vertical-align: middle;
    .username{
    font-size: 15px;
    color: #333;
    text-decoration: none;
    }
    .meta{
    margin-top:4px;
    font-size: 12px;
    color: #969696;
    span{
        margin-right: 6px;
    }
    }
    }
    
    .comment-text
    {
     p{
     margin: 10px 0;
     line-height: 1.5;
     font-size: 16px;
     word-break: break-word!important;
     word-break: break-all;
     } 
     .tool-group{
      a{
      margin-right: 10px;
     font-size: 0;
     color: #969696;
     display: inline-block;
     text-decoration: none;
     .icon-zan{
     font-size: 18px;
     display: inline-block;
     transform: rotate(-20deg);
     vertical-align: -4px;
     padding-right: 4px;
     }
     .icon-hf{
     font-size: 21px;
     vertical-align: -8px;
     padding-right: 4px;
     }
     span{
     vertical-align: middle;
     font-size: 14px;
       }
      }
     }
    }
`;
export const FixedAdContainer = styled.div`
    position: fixed;
    top: 80px;
    right: 50%;
    margin-right: -560px;
    width: 180px;
    .web-note-ad-fixed{
    display: block;
    width: 100%;
    height: 260px;
    background-image: url(/images/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    margin-bottom: 15px;
    }
    .close{
    cursor: pointer;
    display: block;
    width: 20px;
    height: 20px;
    color: #999;
    position: absolute;
    right: 10px;
    top: 10px;
    font-weight: 200;
    font-size: 26px;
    outline: none;
    text-shadow: none;
    float: right;
    line-height: 1;
    opacity: .2;
    }
    .close:hover{
    color:#333;
    font-weight: bold;
    }
`;
export const SideTool = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 10px;
    li{
    line-height: 20px;
    border: 1px solid #dcdcdc;
    border-bottom: none;
    background-color: #fff;
    transition: .1s ease-in;
    span{
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    display: block;
    text-decoration: none;
    color:#333;
    .icon-share,.icon-back-top
    {
    line-height: 50px;
    font-size: 25px;
    }
    }
    }
    li:last-child{
    border-bottom: 1px solid #dcdcdc;
    } 
    }
`;
export const NoteBottomBox = styled.div`
    min-height: 213px;
    background-color: #f5f5f5;
    padding-top: 40px;
    padding-bottom: 40px;
    
`;
export const NoteBottomMain = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0 0 30px 0;
    width: 620px;
`;
export const NoteBottomTitle = styled.div`
    padding-left: 8px;
    border-left: 3px solid #EA6F5A;
    line-height: 1;
    font-size: 15px;
`;

export const IncludeCollection = styled.div`
    width: 100%;
    padding-top: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

export const IncludeCollectionItem = styled.div`
    display: inline-block;
    margin: 0 12px 12px 0;
    min-height: 32px;
    background-color: white;
    border: 1px solid #DCDCDC;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    img{
    width: 32px;
    height: 32px;
    vertical-align: middle;
    border:0;
    }
    .name{
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    }
`;

export const RecommendNote = styled.div`
    margin-bottom: 20px;
    .meta{
    width: 620px;
    margin: 0 auto;
    .title{
    padding-left: 8px;
    border-left: 3px solid #EA6F5A;
    line-height: 1;
    font-size: 15px;
    .more{
        float: right;
    font-size: 14px;
    color: #A0A0A0;
    }
    }
    }
    .list{
       margin-top: 20px;
       width: 620px;
       margin: 0 auto;
       .note{
       position: relative;
       display: block;
       margin-bottom: 25px;
       padding: 0 0 25px 0;
       border-bottom: 1px solid #DDDDDD;
     }
    }
`;

export const SeoRecommendedNotes =styled.div`
    margin: 0 auto 20px;
    width: 620px;
`;
export const SeoRecommendedNoteItem =styled.div`
    :last-child
    {
    border-bottom: none;
    }
    display: block;
    margin-bottom: 25px;
    padding: 0 0 25px;
    border-bottom: 1px solid #ddd;
    position: relative;
    &.have-img{
    min-height: 136px;
    }
    .cover
    {
    float: right;
    margin: -5px 0 0 15px;
    width: 150px;
    height: 120px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    }
    .title{
    display: inherit;
    margin-bottom: 4px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .title:visited
    {
     color: #999;
    }
    .description{
    margin-bottom: 12px;
    font-size: 13px;
    line-height: 23px;
    color: #333; 
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0 0 10px;
    }
    .avatar{
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    border-radius: 50%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    vertical-align: middle;
    img{
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
    }
    }
    .nickname{
    font-size: 13px;
    color: #333;
    vertical-align: middle;
    }
`;
