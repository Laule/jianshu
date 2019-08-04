import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchHot,
    SearchHotTitle,
    SearchHotSwitch,
    SearchHotItem,
    SearchHotList,
} from './style.js';
import {actionCreators} from './store';

class Header extends Component {

    render() {
        const {focused, handleInputFocus, handleInputBlur} = this.props;
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

                        {this.getListArea()}

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

    getListArea() {
        if (this.props.focused) {
            return (
                <SearchHot>
                    <SearchHotTitle>
                        热门搜索
                        <SearchHotSwitch>
                            换一批
                        </SearchHotSwitch>
                    </SearchHotTitle>
                    <SearchHotList>
                        {
                            this.props.list.map((item) => {
                                return <SearchHotItem key={item}>{item}</SearchHotItem>
                            })
                        }
                    </SearchHotList>
                </SearchHot>
            )
        } else {
            return null;
        }
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
        // focused:state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);