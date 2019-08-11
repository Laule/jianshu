import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    ArticleContainer,
    ArticleAuthor,
    ArticleContent,
    ArticleFooterInfo,
    ArticleInfo,
    ArticleLikeShare,
    ArticleTitle,
    AuthorDescription,
    SupportAuthor
} from "../style";

class Article extends PureComponent {
    render() {
        const {articleDetail} = this.props;
        return (
            <Fragment>
                <ArticleContainer>
                    <ArticleTitle>
                        {articleDetail['title']}
                    </ArticleTitle>
                    <ArticleAuthor>
                        <img className='avatar'
                             src={articleDetail['avatar']}
                             alt=''/>
                        <ArticleInfo>
                                <span className='nickname'>
                                    {articleDetail['nickname']}
                                </span>
                            <img className='badge-icon'
                                 src={articleDetail['badge']}
                                 alt=''/>
                            <span className='follow'>
                                    <i className="iconfont">&#xe608;</i>
                                    关注
                                </span>
                            <div className='meta'>
                                <span className='jsd-meta'>
                                    <i className='iconfont icon-diamond'>&#xe6b2;</i>
                                    {articleDetail['diamond']}
                                </span>
                                <span className='publish-time'>{articleDetail['date']}</span>
                                <span className='wordage'>字数 {articleDetail['wordage']}</span>
                                <span className='views-count'>阅读 {articleDetail['views']}</span>
                                <span className='comments-count'>评论 {articleDetail['comments']}</span>
                                <span className='likes-count'>喜欢 {articleDetail['likes']}</span>
                            </div>
                        </ArticleInfo>
                    </ArticleAuthor>

                    <ArticleContent dangerouslySetInnerHTML={{__html: articleDetail['content']}}/>

                </ArticleContainer>
                <SupportAuthor>
                    <p>
                        您的点赞，是我最大的动力。
                    </p>
                    <div className='btn-pay'>
                        赞赏支持
                    </div>
                    <div className='supporter'>

                    </div>
                </SupportAuthor>
                <ArticleFooterInfo>
                        <span className='notebook'>
                            <i className='iconfont'>&#xe643;</i>
                             日记本
                        </span>
                    <div className='copyright'>
                        © 著作权归作者所有
                    </div>
                    <div className='report-note'>
                        举报文章
                    </div>
                </ArticleFooterInfo>
                <AuthorDescription>
                    <div className='info'>
                        <img className='avatar' src={articleDetail['avatar']} alt=''/>
                        <span className='follow'><i className="iconfont">&#xe608;</i>关注</span>
                        <span className='nickname'>{articleDetail['nickname']}</span>
                        <img className='badge-icon' src={articleDetail['badge']} alt=''/>
                        <i className='iconfont icon-man'>&#xe661;</i>
                        <p>写了{articleDetail['totalWord']} 字，被{articleDetail['totalFollow']} 人关注，获得了{articleDetail['totalLikes']} 个喜欢</p>
                    </div>
                    <div className='signature'>{articleDetail['signature']}</div>
                </AuthorDescription>
                <ArticleLikeShare>
                    <div className='like'>
                        <div className='like-btn-group'>
                            <div className='btn-like'>
                                    <span>
                                        <i className='iconfont icon-like'>
                                            &#xe637;
                                        </i>
                                        喜欢
                                    </span>
                            </div>
                            <div className='like-number'>
                                    <span>
                                        {articleDetail['likes']}
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className='share-group'>
                            <span className='share-circle'>
                                <i className='iconfont icon-weixin'>&#xe63c;</i>
                            </span>
                        <span className='share-circle'>
                                 <i className='iconfont icon-weibo'>&#xe63d;</i>
                                </span>

                        <span className='share-circle'>
                                 <i className='iconfont icon-xiance'>&#xe674;</i>
                                </span>
                        <span className='share-circle more-share'>
                                更多分享
                            </span>
                    </div>
                </ArticleLikeShare>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    articleDetail: state.getIn(['details', 'articleDetail'])
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Article);