import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import {Globalstyle} from './style';
import {GlobalIconFont} from './static/iconfont/iconfont';
import store from './store/index';

class App extends Component {
    render() {
        return (
            <Fragment>
                {/*把数据提供给内部组件*/}
                <Provider store={store}>
                    <Header>

                    </Header>
                    <Globalstyle/>
                    <GlobalIconFont/>
                </Provider>
            </Fragment>
        )
    }
}

export default App;
