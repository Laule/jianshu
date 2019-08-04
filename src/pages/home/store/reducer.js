import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'https://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },{
        id:2,
        title:'豆瓣电影',
        imgUrl:'https://upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
    }]
});


export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}