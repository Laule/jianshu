import React, {PureComponent, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import {Globalstyle} from './style';
import {GlobalIconFont} from './static/iconfont/iconfont';
import store from './store/index';
import Home from './pages/home';
import Details from './pages/details/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                {/*把数据提供给内部组件*/}
                <Provider store={store}>
                    <BrowserRouter>
                        <Header/>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/write' exact component={Write}></Route>
                        <Route path='/details/:id' exact component={Details}></Route>
                    </BrowserRouter>
                    <Globalstyle/>
                    <GlobalIconFont/>
                </Provider>
            </Fragment>
        )
    }
}

export default App;
