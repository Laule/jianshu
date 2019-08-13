import React, {Fragment, PureComponent} from 'react';
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
        const {topicList, recommendList} = this.props;
        return (
            <NoteBottomBox>
                <NoteBottomMain>
                    <NoteBottomTitle>
                        被以下专题收入，发现更多相似内容
                    </NoteBottomTitle>
                    <IncludeCollection>
                        {
                            topicList.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <IncludeCollectionItem>
                                            <img
                                                src={item.get('imgUrl')}
                                                alt=''/>
                                            <div className='name'>{item.get('title')}</div>
                                        </IncludeCollectionItem>
                                    </Fragment>
                                )
                            })
                        }
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
                    {
                        recommendList.map((item, index) => {
                            if(item.get('cover'))
                            {
                                return (
                                    <Fragment key={index}>
                                        <SeoRecommendedNoteItem className='have-img'>
                                            <img className='cover' src={item.get('cover')} alt=''/>
                                            <h1 className='title'>
                                                {item.get('title')}
                                            </h1>
                                            <p className='description' dangerouslySetInnerHTML={{__html: item.get('content')}}>
                                            </p>
                                            <div className='author'>
                                                <div className='avatar'>
                                                    <img
                                                        src={item.get('avatar')}
                                                        alt=''/>
                                                </div>
                                                <span className='nickname'>{item.get('author')}</span>
                                            </div>
                                        </SeoRecommendedNoteItem>
                                    </Fragment>
                                )
                            }else
                            {
                                return (
                                    <Fragment key={index}>
                                        <SeoRecommendedNoteItem>
                                            <h1 className='title'>
                                                {item.get('title')}
                                            </h1>
                                            <p className='description' dangerouslySetInnerHTML={{__html: item.get('content')}}>

                                            </p>
                                            <div className='author'>
                                                <div className='avatar'>
                                                    <img
                                                        src={item.get('avatar')}
                                                        alt=''/>
                                                </div>
                                                <span className='nickname'>{item.get('author')}</span>
                                            </div>
                                        </SeoRecommendedNoteItem>
                                    </Fragment>
                                )
                            }
                        })
                    }
                </SeoRecommendedNotes>
            </NoteBottomBox>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['details', 'topicList']),
    recommendList: state.getIn(['details', 'recommendList'])
});

export default connect(mapStateToProps, null)(NoteBottom);