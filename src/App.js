import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import {Globalstyle} from './style';
import {GlobalIconFont} from './static/iconfont/iconfont';
import store from './store/index';

import Home from './pages/home';
import Details from './pages/details';

class App extends Component {
    render() {
        return (
            <Fragment>
                {/*把数据提供给内部组件*/}
                <Provider store={store}>
                    <Header/>
                    <BrowserRouter>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/details' exact component={Details}></Route>
                    </BrowserRouter>
                    <Globalstyle/>
                    <GlobalIconFont/>
                </Provider>
            </Fragment>
        )
    }
}

export default App;
