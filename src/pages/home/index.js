import React, {Component} from 'react';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                         src='https://upload.jianshu.io/admin_banners/web_images/4686/b0c8770725de15714a4cb894f0ecdbc16f216008.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;