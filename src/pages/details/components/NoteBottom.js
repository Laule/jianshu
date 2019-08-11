import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    IncludeCollection,
    IncludeCollectionItem,
    NoteBottomBox,
    NoteBottomMain,
    NoteBottomTitle,
    RecommendNote,
    SeoRecommendedNoteItem,
    SeoRecommendedNotes
} from "../style";

class NoteBottom extends PureComponent {
    render() {
        const {topicList,recommendList} = this.props;
        console.log(topicList);
        return (
            <NoteBottomBox>
                <NoteBottomMain>
                    <NoteBottomTitle>
                        被以下专题收入，发现更多相似内容
                    </NoteBottomTitle>
                    <IncludeCollection>


                        <IncludeCollectionItem>
                            <img
                                src='//upload.jianshu.io/collections/images/1730597/crop1552189748654.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
                                alt=''/>
                            <div className='name'>摘录大全</div>
                        </IncludeCollectionItem>
                        <IncludeCollectionItem>
                            <img
                                src='//upload.jianshu.io/collections/images/1753763/crop1556584105479.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
                                alt=''/>
                            <div className='name'>哲思感悟</div>
                        </IncludeCollectionItem>
                        <IncludeCollectionItem>
                            <img
                                src='//upload.jianshu.io/collections/images/255988/android.graphics.Bitmap_42c6bd20.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
                                alt=''/>
                            <div className='name'>读书</div>
                        </IncludeCollectionItem>
                        <IncludeCollectionItem>
                            <img
                                src='//upload.jianshu.io/collections/images/567871/1511143818.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
                                alt=''/>
                            <div className='name'>爱之思</div>
                        </IncludeCollectionItem>
                        <IncludeCollectionItem>
                            <img
                                src='//upload.jianshu.io/collections/images/569166/1511328284.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
                                alt=''/>
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
                    <SeoRecommendedNoteItem>
                        <h1 className='title'>
                            哲学的故事
                        </h1>
                        <p className='description'>
                            苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴?
                            或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                        </p>
                        <div className='author'>
                            <div className='avatar'>
                                <img
                                    src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48'
                                    alt=''/>
                            </div>
                            <span className='nickname'>枫情物语</span>
                        </div>
                    </SeoRecommendedNoteItem>
                    <SeoRecommendedNoteItem className='have-img'>
                        <img className='cover' src='/images/6351690-28e2e3e4a5f33998.jpg' alt=''/>
                        <h1 className='title'>
                            哲学的故事
                        </h1>
                        <p className='description'>
                            苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴?
                            或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                        </p>
                        <div className='author'>
                            <div className='avatar'>
                                <img
                                    src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48'
                                    alt=''/>
                            </div>
                            <span className='nickname'>枫情物语</span>
                        </div>
                    </SeoRecommendedNoteItem>
                    <SeoRecommendedNoteItem className='have-img'>
                        <img className='cover' src='/images/6351690-28e2e3e4a5f33998.jpg' alt=''/>
                        <h1 className='title'>
                            哲学的故事
                        </h1>
                        <p className='description'>
                            苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴?
                            或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                        </p>
                        <div className='author'>
                            <div className='avatar'>
                                <img
                                    src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48'
                                    alt=''/>
                            </div>
                            <span className='nickname'>枫情物语</span>
                        </div>
                    </SeoRecommendedNoteItem>
                    <SeoRecommendedNoteItem className='have-img'>
                        <img className='cover' src='/images/6351690-28e2e3e4a5f33998.jpg' alt=''/>
                        <h1 className='title'>
                            哲学的故事
                        </h1>
                        <p className='description'>
                            苏格拉底为什么受爱戴 苏格拉底到底为什么如此受学生的爱戴?
                            或许因为他既是一名哲学家，又是个极富人情味的人：他在战场上冒着极大的危险救了亚西比德的命，他喝酒时极有绅士范儿，毫无顾忌却又不失分寸。但毫无疑问，他那谦逊外表下无穷的智慧才是学生最为崇拜的：他从不说自己拥有智慧，而...
                        </p>
                        <div className='author'>
                            <div className='avatar'>
                                <img
                                    src='//upload.jianshu.io/users/upload_avatars/6351690/b3aeec7b-7794-4fde-b51d-1cdf21d1a765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48'
                                    alt=''/>
                            </div>
                            <span className='nickname'>枫情物语</span>
                        </div>
                    </SeoRecommendedNoteItem>
                </SeoRecommendedNotes>
            </NoteBottomBox>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['details', 'topicList']),
    recommendList: state.getIn(['details', 'recommendList'])
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NoteBottom);