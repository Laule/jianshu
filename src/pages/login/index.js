import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Input,
    InputBox,
    LoginBox,
    CheckBox,
    LoginContainer,
    LoginNormalTitle,
    LoginTab,
    LoginWrapper,
    RememberBtn,
    BtnGroup,
    ForgetBtn,
    MoreSign,
    Registered
} from './style';
import * as actionCreators from './store/actionCreators'
import {Redirect} from 'react-router-dom';

class Login extends PureComponent {
    render() {
        const {login, loginStatus, is_sign, handleChangePageStatus, register} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginTab>
                            <LoginNormalTitle>
                                <span className={is_sign ? "active" : ""} onClick={() => {
                                    handleChangePageStatus('sign')
                                }}>登录</span>
                                <b>·</b>
                                <span className={is_sign ? "" : "active"} onClick={() => {
                                    handleChangePageStatus('sign_up')
                                }}>注册</span>
                            </LoginNormalTitle>
                        </LoginTab>

                        {is_sign ? <LoginContainer>
                            <InputBox>
                                <Input className='account' placeholder='手机号或邮箱' ref={(input) => {
                                    this.account = input
                                }}/>
                                <i className='iconfont'>&#xe600;</i>
                            </InputBox>
                            <InputBox>
                                <Input className='password' placeholder='密码' type='password'
                                       ref={(input) => {
                                           this.password = input
                                       }}/>
                                <i className='iconfont'>&#xe635;</i>
                            </InputBox>
                            <BtnGroup>
                                <RememberBtn>
                                    <CheckBox/>
                                    <span>记住我</span>
                                </RememberBtn>
                                <ForgetBtn>
                                    登录遇到问题？
                                </ForgetBtn>
                            </BtnGroup>
                            <Button onClick={() => login(this.account, this.password)}>
                                登录
                            </Button>
                            <MoreSign>
                                <h6 className='moreSignTitle'>社交帐号登录</h6>
                                <ul>
                                    <li>
                                        <a href='/'>
                                            <i className='iconfont icon-weibo'>&#xe63d;</i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className='iconfont icon-weixin'>&#xe63c;</i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className='iconfont icon-qq'>&#xe60e;</i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='otherSign' href='/'>
                                            其它
                                        </a>
                                    </li>

                                </ul>
                            </MoreSign>
                        </LoginContainer> : <Registered>
                            <InputBox>
                                <Input className='nickname' placeholder='你的昵称' ref={(input) => {
                                    this.nickname = input
                                }}/>
                                <i className='iconfont'>&#xe600;</i>
                            </InputBox>
                            <InputBox>
                                <Input className='phone' placeholder='手机号' ref={(input) => {
                                    this.phone = input
                                }}/>
                                <i className='iconfont'>&#xe616;</i>
                            </InputBox>
                            <InputBox>
                                <Input className='set_password' placeholder='设置密码' type='password'
                                       ref={(input) => {
                                           this.password = input
                                       }}/>
                                <i className='iconfont'>&#xe635;</i>
                            </InputBox>
                            <Button className='register_btn'
                                    onClick={() => register(this.nickname, this.phone, this.password)}>
                                注册
                            </Button>
                            <p className='contract'>
                                点击 “注册” 即表示您同意并愿意遵守简书
                                <br/>
                                <a href='/'>用户协议</a>和<a href='/'>隐私政策 </a>。
                            </p>

                            <MoreSign>
                                <h6 className='moreSignTitle'>社交帐号直接注册</h6>
                                <ul>
                                    <li>
                                        <a href='/'>
                                            <i className='iconfont icon-weixin'>&#xe63c;</i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i className='iconfont icon-qq'>&#xe60e;</i>
                                        </a>
                                    </li>
                                </ul>
                            </MoreSign>
                        </Registered>
                        }
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else {
            return <Redirect to='/'/>
        }
    }

    componentDidMount() {
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login']),
    is_sign: state.getIn(['login', 'is_sign'])
});


const mapDispatchToProps = (dispatch) => ({
    login(accountElement, passwordElement) {
        console.log(accountElement.value);
        console.log(passwordElement.value);
        dispatch(actionCreators.login(accountElement.value, passwordElement.value));
    },
    register() {

    },
    handleChangePageStatus(status) {
        if (status === 'sign') {
            dispatch(actionCreators.changePageStatus(true));
        }else
        {
            dispatch(actionCreators.changePageStatus(false));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);