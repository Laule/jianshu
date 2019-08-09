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
export const Article = styled.div`
    
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

export const AuthorDescription = styled.div`
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