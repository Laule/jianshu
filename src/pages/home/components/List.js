import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';

class List extends PureComponent {
    render() {
        const {list, getMoreList, page} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to='./details'>
                                <ListItem>
                                    <img className='list-pic'
                                         src={item.get('imgUrl')} alt=''/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
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