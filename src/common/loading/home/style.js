import styled, {keyframes} from 'styled-components';
// https://www.styled-components.com/docs/api#keyframes


export const LoadingPlaceholder = styled.div`
    position: relative;
    padding: 15px 2px 0 0;
    margin-bottom: 50px;
`;

export const LoadingPlaceholderImg = styled.div`
      width: 150px;
      position: absolute;
      bottom: 2px;
      right: 0;
      width: 125px;
      height: 100px;
      border-radius: 4px;
      background-color: #eaeaea;
`;
export const LoadingContent = styled.div`
      padding-right: 135px;
      box-sizing: border-box;
`;
export const LoadingPlaceholderTitle = styled.div`
    float: none!important;
    width: 50%;
    height: 20px;
    margin: 0 0 15px!important;
    background-color: #eaeaea;
`;

export const LoadingPlaceholderMeta = styled.div`
    div{
    display: inline-block;
    vertical-align: middle;
    background-color: #eaeaea;
    }
    margin: 0;
    color: #eaeaea;
    font-size: 12px;
`;
export const LoadingPlaceholderRead = styled.div`
    height: 16px;
    width: 50px;
`;

export const LoadingPlaceholderSmall = styled.div`
    height: 16px;
    width: 30px;
`;
const loading = keyframes`
     {
       0% {
        width: 60%;
         }
       50% {
        width: 100%;
        }
        100% {
         width: 60%;
          }
        }
`;

export const LoadingPlaceholderText = styled.div`
    &.animation-delay{
    -webkit-animation: ${loading} 1s ease-in-out -.5s infinite;
    animation: ${loading} 1s ease-in-out -.5s infinite;
    }
    width: 100%;
    height: 16px;
    margin: 0 0 10px;
    background-color: #eaeaea;
    -webkit-animation: ${loading} 1s ease-in-out infinite;
    animation: ${loading} 1s ease-in-out infinite;
`;

