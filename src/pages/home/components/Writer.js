import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    Advertisement,
    WriterInfo,
    WriterItem,
    WriterList,
    WriterMore,
    WriterTitle,
    WriterWrapper,
    WriteSwitch
} from '../style';

class Writer extends PureComponent {
    getWriterArea() {
        const {page,list,handleChangePage,totalPage} = this.props;
        // immutable转为array
        const newList = list.toJS();
        const pageList = [];
        console.log(newList);
        if (newList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                if (typeof newList[i] !== "undefined") {
                    pageList.push(
                        <WriterItem key={newList[i]['id']}>
                            <a className='avatar'>
                                <img
                                    src={newList[i]['avatar_source']}
                                    alt=''/>
                            </a>
                            <a className='follow'>
                                关注
                            </a>
                            <a className='name'>
                                {newList[i]['nickname']}
                            </a>
                            <p className='work-like'>
                                写了{newList[i]['total_wordage']/1000}k字 ·{newList[i]['total_likes_count']/1000}k喜欢
                            </p>
                        </WriterItem>
                    )
                }
            }
        }

        return (
            <WriterInfo>
                <WriterTitle>
                    <span>推荐作者</span>
                    <WriteSwitch
                        onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                    >
                            <span ref={(icon) => {
                                this.spinIcon = icon
                            }} className="iconfont spin">&#xe65a;</span>
                        换一批
                    </WriteSwitch>
                </WriterTitle>
                <WriterList>
                    {pageList}
                </WriterList>
                <WriterMore>
                    查看全部
                    <i className="iconfont">&#xe735;</i>
                </WriterMore>
            </WriterInfo>
        )


    }

    render() {
        return (
            <WriterWrapper>
                <Advertisement imgUrl='/images/java_1-755777d0f56b28c5455e5e59669a3db8.png'>
                    <span className="ad-badge">广告</span>
                </Advertisement>
                {this.getWriterArea()}
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'writerList']),
        totalPage: state.getIn(['home', 'totalPage']),
        page: state.getIn(['home', 'page'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage(){

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer);