import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem, TopicItemMore} from '../style';

class Topic extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic'
                                     src={item.get('imgUrl')} alt='专题'/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                <TopicItemMore>
                    更多热门专题
                    <i className="iconfont">&#xe735;</i>
                </TopicItemMore>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'topicList'])
});

export default connect(mapStateToProps, null)(Topic);