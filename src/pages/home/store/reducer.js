import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }, {
        id: 2,
        title: '豆瓣电影',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
    }],
    articleList: [{
        id: 1,
        title: 'Ta是不是命中注定的那个人，问自己一个问题就知道了',
        desc: '有些人，爱情长跑十年，然后，各走各路； 有些人，相遇仅仅数月，然后，牵手终生； 有些人，初遇一见钟情，然后，就结婚了； 有些人，轰轰烈烈结婚，转...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/7643104-b6920089be245252.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 2,
        title: '从初级到高级插画师的转变，到底经历了什么？',
        desc: '前言： 从十多天的练习手写字体，然后在一次机会中，看见类似的插画，觉得挺有意思的，想尝试往这方面走。圆形嘛代表的圆圆满满，没有菱角，给人一种舒服...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/19931-649a174055e02201.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
        {
            id: 3,
            title: '荡秋千、网状吊床、拳击沙袋，你爸妈没想到的新奇创意家居设计！',
            desc: '没和父母公婆长辈住一起？那就把家里搞得有趣点吧！ 没人规定客厅只能是客厅、书房一定是书房的样子，或是一定要把每寸空间运用到极致，在这里忘掉那些必...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14892748-f86ae191c780ae86?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }],
    recommendList:[
        {
            id:1,
            imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id:2,
            imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        }
    ]
});


export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}