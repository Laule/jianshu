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
export const ArticleFooterInfo =styled.div`
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
`;
