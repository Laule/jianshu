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
import {actionCreators} from "../store";

class Writer extends PureComponent {
    getWriterArea() {
        const {page,list,handleChangePage,totalPage} = this.props;
        // immutable转为array
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                if (typeof newList[i] !== "undefined") {
                    pageList.push(
                        <WriterItem key={newList[i]['id']}>
                            <a className='avatar' href='/'>
                                <img
                                    src={newList[i]['avatar_source']}
                                    alt=''/>
                            </a>
                            <a className='follow' href='/'>
                                <i className="iconfont">&#xe608;</i>
                                关注
                            </a>
                            <a className='name' href='/'>
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
                    <WriteSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe65a;</span>
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
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer);