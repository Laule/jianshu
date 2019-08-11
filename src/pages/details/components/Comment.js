import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ArticleComment, CommentContainer, CommentItem, CommentList, CommentTitle, NewComment} from "../style";

class Comment extends PureComponent {
    getCommentArea() {
        const {commentsList} = this.props;
        let comments = commentsList.comments;
        if (typeof comments !== "undefined") {
            return (
                <CommentList>
                    <CommentTitle>
                        <span className='comment-num'>{commentsList['total']}条评论</span>
                        <span className='author-only'>只看作者</span>
                        <div className='pull-right'>
                            <a href='/' className='active'>按时间倒序</a>
                            <a href='/'>按时间正序</a>
                        </div>
                    </CommentTitle>
                    {
                        comments.map((item, index) => {
                            return (
                                <CommentItem key={index}>
                                    <div className='author'>
                                        <img className='avatar'
                                             src={item['user']['avatar']}
                                             alt=''/>
                                        <div className='info'>
                                            <a href='/' className='username'>{item['user']['nickname']}</a>
                                            <div className='meta'>
                                                <span>{index}楼 · {item['date']}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='comment-text'>
                                        <p>{item['content']}</p>
                                        <div className='tool-group'>
                                            <a className='like-button' href='/'>
                                                <i className='iconfont icon-zan'>&#xe640;</i>
                                                <span>{item['agree']}人赞</span>
                                            </a>
                                            <a className='comment-report' href='/'>
                                                <i className='iconfont icon-hf'>&#xe63e;</i>
                                                <span>回复</span>
                                            </a>
                                        </div>
                                    </div>
                                </CommentItem>
                            )
                        })
                    }
                </CommentList>
            );
        }
    }

    render() {
        return (
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
                    {this.getCommentArea()}
                </CommentContainer>
            </ArticleComment>
        )
    }
}
const mapStateToProps = (state) => ({
    commentsList: state.getIn(['details', 'commentsList'])
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);