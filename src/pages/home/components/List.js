import React, {PureComponent} from 'react';
import {ListWrapper,ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';

class List extends PureComponent {
    render() {
        const {list, getMoreList, page} = this.props;
        return (
            <ListWrapper>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'./details/' + item.get('id')}>
                                <ListItem>
                                    <img className='list-pic'
                                         src={item.get('imgUrl')} alt=''/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>
                                            {item.get('desc')}
                                        </p>
                                        <div className='meta'>
                                            <span className='jsd-meta'>
                                                <i className='iconfont icon-diamond'>&#xe6b2;</i>
                                                2.3
                                            </span>
                                            <span className='nickname'>
                                                白丁2009
                                            </span>
                                            <span className='comments'>
                                                <i className='iconfont icon-message'>&#xe67c;</i>
                                                2
                                            </span>
                                            <span className='like'>
                                                <i className='iconfont icon-like'>&#xe602;</i>
                                                  9
                                            </span>
                                        </div>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </ListWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),

})
const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(List);