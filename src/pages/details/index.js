import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import * as actionCreators from './store/actionCreators';

class Details extends PureComponent {
    render() {
        // console.log(this.props.match.params.id);
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        )
    }

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