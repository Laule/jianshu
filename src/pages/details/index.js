import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Comment from './components/Comment';
import Article from './components/Article';
import NoteBottom from './components/NoteBottom';
import {DetailWrapper, FixedAdContainer, Note, SideTool} from './style';
import * as actionCreators from './store/actionCreators';

class Details extends PureComponent {

    render() {
        // console.log(this.props.match.params.id);
        const {showScroll, handleScrollTop,handleCloseAd} = this.props;
        return (
            <Fragment>
                <Note>
                    <FixedAdContainer>
                        <div className='web-note-ad-fixed' ref={(close) => {this.closeIcon = close}} >
                            <span className='close' onClick={() => handleCloseAd(this.closeIcon)}>×</span>
                        </div>
                    </FixedAdContainer>
                    <DetailWrapper>
                        <Article />
                        <img className='note-ad' src='/images/web-note-ad-1-c2e1746859dbf03abe49248893c9bea4.png' alt=''/>
                        <Comment />
                    </DetailWrapper>
                    <SideTool>
                        <ul>
                            {
                                showScroll ? <li onClick={handleScrollTop}><span><i
                                    className='iconfont icon-back-top'>&#xe63a;</i></span></li> : null
                            }
                            <li id='share'>
                            <span>
                                <i className='iconfont icon-share'>
                                    &#xe648;
                                </i>
                            </span>
                            </li>
                        </ul>
                    </SideTool>
                </Note>
                <NoteBottom />
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getDetails(this.props.match.params.id);
        this.props.getComment(this.props.match.params.id);
        this.bindEvents();
    }

    // 组件销毁，去除全局事件绑定（这样这个组件的事件就不会影响其他组件的事件）
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['details', 'showScroll'])
});
const mapDispatchToProps = (dispatch) => ({
    getDetails(id) {
        dispatch(actionCreators.getDetails(id));
    },
    handleScrollTop() {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    },
    handleCloseAd(ad)
    {
        ad.style.display = 'none';
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true));
        }
        else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    },
    getComment(id) {
        dispatch(actionCreators.getComment(id));
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details));