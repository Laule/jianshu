import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return <div>页面加载中，请稍等~</div>
    }
});


export default () => <LoadableComponent/>
