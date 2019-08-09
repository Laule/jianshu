import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    Note,
    DetailWrapper,
    ArticleTitle,
    Article,
    ArticleAuthor,
    ArticleInfo,
    ArticleContent,
    SupportAuthor,
    ArticleFooterInfo,
    AuthorDescription,
    ArticleLikeShare,
    ArticleComment,
    CommentContainer,
    NewComment,
    CommentList,
    CommentTitle,
    CommentItem
} from './style';
import * as actionCreators from './store/actionCreators';

class Details extends PureComponent {
    render() {
        // console.log(this.props.match.params.id);
        const {title, content} = this.props;
        return (
            <Note>
                <DetailWrapper>
                    <Article>
                        <ArticleTitle>
                            世界顶级哲学家对生命的思考
                        </ArticleTitle>
                        <ArticleAuthor>
                            <img className='avatar'
                                 src='https://upload.jianshu.io/users/upload_avatars/16040239/a2f3fd38-fd9a-491e-b6f0-86e23ee95a9f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
                                 alt=''/>
                            <ArticleInfo>
                                <span className='nickname'>
                                  西瓜籽毁
                                </span>
                                <img className='badge-icon'
                                     src='https://upload.jianshu.io/user_badge/5203a3bf-1c0f-41db-a6f0-31ddb4a929cb'
                                     alt=''/>
                                <span className='follow'>
                                    <i className="iconfont">&#xe608;</i>
                                    关注
                                </span>
                                <div className='meta'>
                                <span className='jsd-meta'>
                                    <i className='iconfont icon-diamond'>&#xe6b2;</i>
                                    16.1
                                </span>
                                    <span className='publish-time'>2019.01.28 14:14*</span>
                                    <span className='wordage'>字数 739</span>
                                    <span className='views-count'>阅读 2635</span>
                                    <span className='comments-count'>评论 17</span>
                                    <span className='likes-count'>喜欢 92</span>
                                </div>
                            </ArticleInfo>
                        </ArticleAuthor>

                        <ArticleContent>

                            <p>叔本华：世界顶级哲学家对生命的思考，你能看懂几条？<br/></p><p>叔本华其人</p>
                            <p>亚瑟·叔本华（1788年2月22日—1860年9月21日，72岁），德国著名哲学家，其在哲学史上开创了非理性主义哲学的先河，也是唯意志论的创始人和主要代表之一，认为生命意志是主宰世界运作的力量。</p>
                            <p></p>
                            <p>叔本华的理论影响了尼采、萨特等诸多哲学家，莫泊桑称他为“人类历史上最伟大的梦想破坏者”。国学大师王国维的思想亦深受叔本华的影响，在其著作《人间词话》中以叔本华的理论评宋词；还曾借助其理论发展了红学，成就颇高。</p>
                            <p>叔本华是人类发展中闪耀的恒星，凡是高深的思想理解起来都是有难度的，他的思想不应该被玷污和抹黑，他的理念永远值得人们去深深思索。</p><p></p>
                            <p>1.一个人，要么孤独，要么庸俗。</p><p>2.不要成为他人的看法和意见的奴隶。</p><p>3.我们可将财富比做海水，喝的愈多，愈是口渴，名声亦复如此。</p>
                            <p>4.只要条件许可，机会成熟，人人都是想作恶的。</p><p>5.谦虚对才华无奇的人来说只是一种诚实，对才华绝顶的人来说，是一种虚伪。</p>
                            <p>6.平庸的人关心怎样耗费时间，有才能的人竭力利用时间。</p><p>7.不要让自己的大脑变成别人思想的跑马场。</p><p></p>
                            <p>8.生命是向死亡讨来的借贷，而睡眠，不过是缴付利息。</p><p>9.人在一生当中的前四十年，写的是本文，在往后的三十年，则不断地在本文中加添注释。</p>
                            <p>10.人们聚会的场面越大，就越容易变得枯燥乏味。 只有当一个人独处的时候，他才可以完全成为自己。</p><p>11.谁要是不热爱独处，那他也就是不热爱自由，
                            因为只有当一个人独处的时候，他才是自由的。</p><p>12.没有人生活在过去，也没有人生活在未来，现在是生命确实占有的唯一形态。</p>
                            <p>13.一个人渴望什么，他就会相信什么。</p>
                            <p>14.对绝大多数人来说，一个人表现出聪明和思想只能激起别人对他的憎恨和反感。显示自己的聪明智慧其实就是间接地指责别人愚蠢和无能。</p>
                            <p>15.当一个人绝对粗鲁时，就好像他脱光了衣服赤裸裸地站在我们面前。</p>
                            <p>16.几乎所有的人毕生不息的奋斗，历经千难万险，最终的目的就是让别人对自己刮目相看。人们拼命追求官位、头衔、证书，还有财富，其首要目的是为了赢得别人对自己更大的敬意，甚至人们掌握科学、艺术，也是从根本上处于同样的目的。</p>
                            <p>17每个人都将自身所感知的范围当作这个世界。</p><p>18.一个人自身拥有的越是丰富，那么他对他的身外之物的需求也就越少，别人对他来说也 就越不重要。</p>
                            <p>19.事物的本身并不影响人，人们只受对事物看法的影响。</p><p></p><p>20.不要轻言你是在为谁付出和牺牲，其实所有的付出和牺牲最终的受益人都是自己。</p>
                            <p>21.天才就住在疯子的楼上。</p><p>22.一个人最大弱点，就是太在意别人如何看待自己，而这个弱点就是人性中最大的自卑。</p>
                            <p>23.如果不是我配不上这个时代，就是这个时代配不上我。</p><p>24.所有在他视线以外的东西，都不会对他产生任何影响。</p><p>25.感觉到时间的存在，就无聊。
                            感觉到身体的存在，就痛苦。</p><p>26.生命是一团欲望，当欲望得不到满足便痛苦，当欲望得到满足便无聊，人生如钟摆在痛苦与无聊之间摇摆.</p>
                        </ArticleContent>
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
                                 src='https://upload.jianshu.io/users/upload_avatars/16040239/a2f3fd38-fd9a-491e-b6f0-86e23ee95a9f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
                                 alt=''/>
                            <span className='follow'>
                                    <i className="iconfont">&#xe608;</i>
                                    关注
                                </span>
                            <span className='nickname'>
西瓜籽毁
                            </span>
                            <img className='badge-icon' src='https://upload.jianshu.io/user_badge/5203a3bf-1c0f-41db-a6f0-31ddb4a929cb' alt='' />
                            <i className='iconfont icon-man'>
                                &#xe661;
                            </i>
                            <p>写了 20044 字，被 98 人关注，获得了 351 个喜欢</p>
                        </div>
                        <div className='signature'>
                            我的微信公众号：程序诗人，热爱互联网，与你分享互联网的一切。
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
                                        92
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
                    <img className='note-ad' src='/images/web-note-ad-1-c2e1746859dbf03abe49248893c9bea4.png' alt=''/>
                    <ArticleComment>
                        <CommentContainer>
                            <NewComment>
                                <div className='avatar'>
                                    <img src='/images/avatar_default-78d4d1f68984cd6d4379508dd94b4210.png' alt='' />
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
                                        <img className='avatar' src='//upload.jianshu.io/users/upload_avatars/2022099/7cd06732-1df8-401b-b348-4f1ae39b28a3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp' alt='' />
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
            </Note>
    )
    }
// <Header>
// {title}
// </Header>
// <Content dangerouslySetInnerHTML={{__html: content}}/>

    componentDidMount() {
        this.props.getDetails(this.props.match.params.id);
    }
    }

    const mapStateToProps = (state) => ({
        title: state.getIn(['details', 'title']),
        content: state.getIn(['details', 'content']),

    });
    const mapDispatchToProps = (dispatch) => ({
        getDetails(id) {
        dispatch(actionCreators.getDetails(id));
    }
    })
    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details));