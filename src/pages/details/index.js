import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    Article,
    ArticleAuthor,
    ArticleComment,
    ArticleContent,
    ArticleFooterInfo,
    ArticleInfo,
    ArticleLikeShare,
    ArticleTitle,
    AuthorDescription,
    CommentContainer,
    CommentItem,
    CommentList,
    CommentTitle,
    DetailWrapper,
    FixedAdContainer,
    NewComment,
    Note,
    SideTool,
    SupportAuthor,
    NoteBottom,
    NoteBottomTitle,
    NoteBottomMain,
    IncludeCollection,
    IncludeCollectionItem,
    RecommendNote,
    SeoRecommendedNotes,
    SeoRecommendedNoteItem
} from './style';
import * as actionCreators from './store/actionCreators';

class Details extends PureComponent {
    render() {
        // console.log(this.props.match.params.id);
        const {articleDetail, showScroll, handleScrollTop} = this.props;
        return (
            <Fragment>
                <Note>
                    <FixedAdContainer>
                        <a className='web-note-ad-fixed' href='/'>
                            <span className='close'>×</span>
                        </a>
                    </FixedAdContainer>
                    <DetailWrapper>
                        <Article>
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

                            <ArticleContent dangerouslySetInnerHTML={{__html: articleDetail['content']}} />

                        </Article>
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
                                <img className='avatar'
                                     src={articleDetail['avatar']}
                                     alt=''/>
                                <span className='follow'>
                                    <i className="iconfont">&#xe608;</i>
                                    关注
                                </span>
                                <span className='nickname'>
                                    {articleDetail['nickname']}
                            </span>
                                <img className='badge-icon'
                                     src={articleDetail['badge']}
                                     alt=''/>
                                <i className='iconfont icon-man'>
                                    &#xe661;
                                </i>
                                <p>写了{articleDetail['totalWord']}  字，被{articleDetail['totalFollow']}  人关注，获得了{articleDetail['totalLikes']}  个喜欢</p>
                            </div>
                            <div className='signature'>
                                {articleDetail['signature']}
                            </div>
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
                        <img className='note-ad' src='/images/web-note-ad-1-c2e1746859dbf03abe49248893c9bea4.png'
                             alt=''/>
                        <ArticleComment>
                            <CommentContainer>
                                <NewComment>
                                    <div className='avatar'>
                                        <img src='/images/avatar_default-78d4d1f68984cd6d4379508dd94b4210.png' alt=''/>
                                    </div>
                                    <div className='sign-container'>
                                        <span className='btn-sign'>登录</span>
                                        <span className='sign-text'>后发表评论</span>
                                    </div>
                                </NewComment>
                                <CommentList>
                                    <CommentTitle>
                                        <span className='comment-num'>14条评论</span>
                                        <span className='author-only'>只看作者</span>
                                        <div className='pull-right'>
                                            <a href='/' className='active'>按时间倒序</a>
                                            <a href='/'>按时间正序</a>
                                        </div>
                                    </CommentTitle>

                                    <CommentItem>
                                        <div className='author'>
                                            <img className='avatar'
                                                 src='//upload.jianshu.io/users/upload_avatars/2022099/7cd06732-1df8-401b-b348-4f1ae39b28a3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp'
                                                 alt=''/>
                                            <div className='info'>
                                                <a href='/' className='username'>若君如水</a>
                                                <div className='meta'>
                                                    <span>10楼 · 2019.04.23 23:45</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment-text'>
                                            <p>抱歉从学术上讲您这个理解太浅显了，萨特对于存在主义的思考和尼采对于道德上的谱系学方法论结果概括的过于片面。好吧...毕竟不是真善美。</p>
                                            <div className='tool-group'>
                                                <a className='like-button' href='/'>
                                                    <i className='iconfont icon-zan'>&#xe640;</i>
                                                    <span>
                                                    1人赞
                                                </span>
                                                </a>
                                                <a className='comment-report' href='/'>
                                                    <i className='iconfont icon-hf'>&#xe63e;</i>
                                                    <span>
                                                    回复
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </CommentItem>
                                    <CommentItem>
                                        <div className='author'>
                                            <img className='avatar'
                                                 src='//upload.jianshu.io/users/upload_avatars/2022099/7cd06732-1df8-401b-b348-4f1ae39b28a3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp'
                                                 alt=''/>
                                            <div className='info'>
                                                <a href='/' className='username'>若君如水</a>
                                                <div className='meta'>
                                                    <span>10楼 · 2019.04.23 23:45</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment-text'>
                                            <p>抱歉从学术上讲您这个理解太浅显了，萨特对于存在主义的思考和尼采对于道德上的谱系学方法论结果概括的过于片面。好吧...毕竟不是真善美。</p>
                                            <div className='tool-group'>
                                                <a className='like-button' href='/'>
                                                    <i className='iconfont icon-zan'>&#xe640;</i>
                                                    <span>
                                                    1人赞
                                                </span>
                                                </a>
                                                <a className='comment-report' href='/'>
                                                    <i className='iconfont icon-hf'>&#xe63e;</i>
                                                    <span>
                                                    回复
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </CommentItem>
                                    <CommentItem>
                                        <div className='author'>
                                            <img className='avatar'
                                                 src='//upload.jianshu.io/users/upload_avatars/2022099/7cd06732-1df8-401b-b348-4f1ae39b28a3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp'
                                                 alt=''/>
                                            <div className='info'>
                                                <a href='/' className='username'>若君如水</a>
                                                <div className='meta'>
                                                    <span>10楼 · 2019.04.23 23:45</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment-text'>
                                            <p>抱歉从学术上讲您这个理解太浅显了，萨特对于存在主义的思考和尼采对于道德上的谱系学方法论结果概括的过于片面。好吧...毕竟不是真善美。</p>
                                            <div className='tool-group'>
                                                <a className='like-button' href='/'>
                                                    <i className='iconfont icon-zan'>&#xe640;</i>
                                                    <span>
                                                    1人赞
                                                </span>
                                                </a>
                                                <a className='comment-report' href='/'>
                                                    <i className='iconfont icon-hf'>&#xe63e;</i>
                                                    <span>
                                                    回复
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </CommentItem>
                                    <CommentItem>
                                        <div className='author'>
                                            <img className='avatar'
                                                 src='//upload.jianshu.io/users/upload_avatars/2022099/7cd06732-1df8-401b-b348-4f1ae39b28a3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp'
                                                 alt=''/>
                                            <div className='info'>
                                                <a href='/' className='username'>若君如水</a>
                                                <div className='meta'>
                                                    <span>10楼 · 2019.04.23 23:45</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment-text'>
                                            <p>抱歉从学术上讲您这个理解太浅显了，萨特对于存在主义的思考和尼采对于道德上的谱系学方法论结果概括的过于片面。好吧...毕竟不是真善美。</p>
                                            <div className='tool-group'>
                                                <a className='like-button' href='/'>
                                                    <i className='iconfont icon-zan'>&#xe640;</i>
                                                    <span>
                                                    1人赞
                                                </span>
                                                </a>
                                                <a className='comment-report' href='/'>
                                                    <i className='iconfont icon-hf'>&#xe63e;</i>
                                                    <span>
                                                    回复
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </CommentItem>
                                    <CommentItem>
                                        <div className='author'>
                                            <img className='avatar'
                                                 src='//upload.jianshu.io/users/upload_avatars/2022099/7cd06732-1df8-401b-b348-4f1ae39b28a3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp'
                                                 alt=''/>
                                            <div className='info'>
                                                <a href='/' className='username'>若君如水</a>
                                                <div className='meta'>
                                                    <span>10楼 · 2019.04.23 23:45</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment-text'>
                                            <p>抱歉从学术上讲您这个理解太浅显了，萨特对于存在主义的思考和尼采对于道德上的谱系学方法论结果概括的过于片面。好吧...毕竟不是真善美。</p>
                                            <div className='tool-group'>
                                                <a className='like-button' href='/'>
                                                    <i className='iconfont icon-zan'>&#xe640;</i>
                                                    <span>
                                                    1人赞
                                                </span>
                                                </a>
                                                <a className='comment-report' href='/'>
                                                    <i className='iconfont icon-hf'>&#xe63e;</i>
                                                    <span>
                                                    回复
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </CommentItem>
                                </CommentList>
                            </CommentContainer>
                        </ArticleComment>

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
                <NoteBottom>
                    <NoteBottomMain>
                        <NoteBottomTitle>
                            被以下专题收入，发现更多相似内容
                        </NoteBottomTitle>
                        <IncludeCollection>
                            <IncludeCollectionItem>
                                <img src='//upload.jianshu.io/collections/images/1730597/crop1552189748654.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp' alt='' />
                                <div className='name'>摘录大全</div>
                            </IncludeCollectionItem>
                            <IncludeCollectionItem>
                                <img src='//upload.jianshu.io/collections/images/1753763/crop1556584105479.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp' alt='' />
                                <div className='name'>哲思感悟</div>
                            </IncludeCollectionItem>
                            <IncludeCollectionItem>
                                <img src='//upload.jianshu.io/collections/images/255988/android.graphics.Bitmap_42c6bd20.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp' alt='' />
                                <div className='name'>读书</div>
                            </IncludeCollectionItem>
                            <IncludeCollectionItem>
                                <img src='//upload.jianshu.io/collections/images/567871/1511143818.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp' alt='' />
                                <div className='name'>爱之思</div>
                            </IncludeCollectionItem>
                            <IncludeCollectionItem>
                                <img src='//upload.jianshu.io/collections/images/569166/1511328284.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp' alt='' />
                                <div className='name'>读书人</div>
                            </IncludeCollectionItem>
                        </IncludeCollection>
                    </NoteBottomMain>
                    <RecommendNote>
                        <div className='meta'>
                            <div className='title'>
                                推荐阅读
                                <span className='more'>
                                    更多精彩内容
                                    <i className='iconfont'>&#xe735;</i>
                                </span>
                            </div>
                        </div>
                        <div className='list'>
                            <div className='note'>

                            </div>
                        </div>
                    </RecommendNote>
                    <SeoRecommendedNotes>
                        <SeoRecommendedNoteItem >
                            <h1 className='title'>
                                哲学的故事
                            </h1>
                            <p className='description'>
                                苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴? 或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                            </p>
                            <div className='author'>
                                <div className='avatar'>
                                    <img src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48' alt='' />
                                </div>
                                <span className='nickname'>枫情物语</span>
                            </div>
                        </SeoRecommendedNoteItem>
                        <SeoRecommendedNoteItem className='have-img'>
                            <img className='cover' src='/images/6351690-28e2e3e4a5f33998.jpg' alt='' />
                            <h1 className='title'>
                                哲学的故事
                            </h1>
                            <p className='description'>
                                苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴? 或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                            </p>
                            <div className='author'>
                                <div className='avatar'>
                                    <img src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48' alt='' />
                                </div>
                                <span className='nickname'>枫情物语</span>
                            </div>
                        </SeoRecommendedNoteItem>
                        <SeoRecommendedNoteItem className='have-img'>
                            <img className='cover' src='/images/6351690-28e2e3e4a5f33998.jpg' alt='' />
                            <h1 className='title'>
                                哲学的故事
                            </h1>
                            <p className='description'>
                                苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴? 或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                            </p>
                            <div className='author'>
                                <div className='avatar'>
                                    <img src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48' alt='' />
                                </div>
                                <span className='nickname'>枫情物语</span>
                            </div>
                        </SeoRecommendedNoteItem>
                        <SeoRecommendedNoteItem className='have-img'>
                            <img className='cover' src='/images/6351690-28e2e3e4a5f33998.jpg' alt='' />
                            <h1 className='title'>
                                哲学的故事
                            </h1>
                            <p className='description'>
                                苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴? 或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                            </p>
                            <div className='author'>
                                <div className='avatar'>
                                    <img src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48' alt='' />
                                </div>
                                <span className='nickname'>枫情物语</span>
                            </div>
                        </SeoRecommendedNoteItem>
                    </SeoRecommendedNotes>
                </NoteBottom>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getDetails(this.props.match.params.id);
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
    articleDetail: state.getIn(['details', 'articleDetail']),
    showScroll: state.getIn(['details', 'showScroll'])

});
const mapDispatchToProps = (dispatch) => ({
    getDetails(id) {
        dispatch(actionCreators.getDetails(id));
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
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details));