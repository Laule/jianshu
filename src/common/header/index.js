import React, {PureComponent} from 'react';
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
import {Link} from 'react-router-dom';

class Header extends PureComponent {

    render() {
        const {focused, handleInputFocus, list, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
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
                                onFocus={() => {
                                    handleInputFocus(list)
                                }}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
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
        const {focused, list, page, mouseIn, totalPage, handleMouseEnter, handleChangePage, handleMouseLeave} = this.props;
        // immutable转为array
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = ((page - 1) * 10); i < page * 10; i++) {
                if (typeof newList[i] !== "undefined") {
                    pageList.push(
                        <SearchHotItem key={newList[i]}>{newList[i]}</SearchHotItem>
                    )
                }
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchHot
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchHotTitle>
                        热门搜索
                        <SearchHotSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchHotSwitch>
                    </SearchHotTitle>
                    <SearchHotList>
                        {pageList}
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
        // focused:state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            console.log(list);
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);