import React, {PureComponent} from 'react';
// PureComponent 和 Component 区别 PureComponent内置
// shouldComponentUpdate,当组件需要更新时 才会渲染 ，从而提升组件性能
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Download from './components/Download';
import {connect} from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import * as actionCreators from './store/actionCreators';

class Home extends PureComponent {
    render() {
        const {handleScrollTop, showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                         src='https://upload.jianshu.io/admin_banners/web_images/4686/b0c8770725de15714a4cb894f0ecdbc16f216008.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                         alt='横幅'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Download />
                    <Writer/>
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={handleScrollTop}>
                        <i className='iconfont'>&#xe63a;</i>
                    </BackTop> : null
                }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.props.changeWriterData();
        this.bindEvents();
    }

    // 组件销毁，去除全局事件绑定（这样这个组件的事件就不会影响其他组件的事件）
    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeWriterData() {
        dispatch(actionCreators.getWriterInfo());
    },
    handleScrollTop() {
        window.scrollTo(0, 0);
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true));
        }
        else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);