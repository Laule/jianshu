import React from 'react';
import Loadable from 'react-loadable';
import {Loading} from './style';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return (
            <Loading>
                    页面加载中，请稍等~
            </Loading>
        )
    }
});


export default () => <LoadableComponent/>
