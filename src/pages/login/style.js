import styled from 'styled-components';

export const LoginWrapper = styled.div`
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    box-sizing: border-box;
    padding-top:50px;
`;
export const LoginBox = styled.div`
    width: 400px;
    margin: 120px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
`;
export const LoginTab = styled.h4`
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    font-size: 18px;
`;
export const LoginNormalTitle = styled.div`
    span{
    padding: 10px;
    cursor: pointer;
    }
    .active{
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    }
   
    b{
        padding: 10px;
    }
`;
export const LoginContainer = styled.div`
    width:300px;
`;

export const Registered = styled.div`
    width:300px;
    .contract{
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    a{
    color: #3194d0;
    text-decoration: none;
    }
    }
`;

export const InputBox = styled.div`
    margin-bottom: 0;
    position: relative;
    width: 100%;
    i{
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
    }
`;

export const Input = styled.input`
      &.account{
      width:100%;
      height: 50px;
      margin-bottom: 0;
      padding: 4px 12px 4px 35px;
      border: 1px solid #c8c8c8;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      background-color: hsla(0,0%,71%,.1);
      vertical-align: middle;
      box-sizing: border-box;
      }
      &.password{
      width: 100%;
      height: 50px;
      margin-bottom: 0;
      padding: 4px 12px 4px 35px;
      border: 1px solid #c8c8c8;
      border-radius: 0 0 4px 4px;
      background-color: hsla(0,0%,71%,.1);
      vertical-align: middle;
      box-sizing: border-box;
      }
      
      &.nickname{
      width:100%;
      height: 50px;
      margin-bottom: 0;
      padding: 4px 12px 4px 35px;
      border: 1px solid #c8c8c8;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      background-color: hsla(0,0%,71%,.1);
      vertical-align: middle;
      box-sizing: border-box;
      }
      &.phone{
      width:100%;
      height: 50px;
      margin-bottom: 0;
      padding: 4px 12px 4px 35px;
      border: 1px solid #c8c8c8;
      border-bottom: none;
      border-radius: 0px 0px 0px 0px;
      background-color: hsla(0,0%,71%,.1);
      vertical-align: middle;
      box-sizing: border-box;
      }
      &.set_password{
      width: 100%;
      height: 50px;
      margin-bottom: 0;
      padding: 4px 12px 4px 35px;
      border: 1px solid #c8c8c8;
      border-radius: 0 0 4px 4px;
      background-color: hsla(0,0%,71%,.1);
      vertical-align: middle;
      box-sizing: border-box;
      }
   
`;
export const BtnGroup = styled.div`
      overflow:hidden;
`;

export const ForgetBtn = styled.div` 
    float: right;
    position: relative;
    margin: 15px 0;
    font-size: 14px;
    color: #999;
    padding-top:4px;
`;

export const RememberBtn = styled.div`
    float: left;
    margin: 15px 0;
    span{
    margin-left: 5px;
    font-size: 15px;
    color: #969696;
    vertical-align: 1px;
    }
`;
export const CheckBox = styled.input.attrs({
    type: 'checkbox'
})`
    margin: 4px 0 0;
    line-height: normal;
    box-sizing: border-box;
    padding: 0;
`;


export const Button = styled.div`
    &.register_btn{
    background:#42c02e;
    margin-top:20px;
    }
    height:40px;
    line-height:40px;
    margin-top: 10px;
    width: 100%;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    box-sizing: border-box;
`;

export const MoreSign = styled.div`
    margin-top: 50px;
    .moreSignTitle{
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    :before
    {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
    left: 30px;
    }
    :after {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
    right: 30px;
    }
    }
    ul{
    margin-bottom: 10px;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    li{
        margin: 0 5px;
    display: inline-block;
        line-height: 20px;
    }
    a{
    text-decoration: none;
        width: 50px;
    height: 50px;
    line-height: 50px;
    display: block;
    .icon-weibo{
        color: #e05244;
        font-size:28px;
    }
    .icon-weixin{
        color: #00bb29;
        font-size:28px;
    }
    .icon-qq{
    color: #498ad5;
    font-size:21px;
      }
     }
    }
    .otherSign{
    color: #999;
    font-size: 17px;
    font-weight: bold;
    }
`;

