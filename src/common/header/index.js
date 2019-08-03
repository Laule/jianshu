import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style.js';
import {handleInputFocus, handleInputBlur} from '../../store/actionCreators';
const Header = (props) => {
    const {focused, handleInputFocus, handleInputBlur} = props;
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont' : 'iconfont'}>
                        &#xe6cf;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className="iconfont">&#xe624;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}


const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = handleInputFocus();
            dispatch(action);
        },
        handleInputBlur() {
            const action = handleInputBlur();
            dispatch(action);
            console.log('456');
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);