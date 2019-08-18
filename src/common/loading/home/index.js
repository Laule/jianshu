import React from 'react';
import {
    LoadingPlaceholder,
    LoadingPlaceholderTitle,
    LoadingPlaceholderText,
    LoadingPlaceholderImg,
    LoadingContent,
    LoadingPlaceholderMeta,
    LoadingPlaceholderRead,
    LoadingPlaceholderSmall
} from './style';

const loading = () => {
    return (
        <LoadingPlaceholder>
            <LoadingPlaceholderImg></LoadingPlaceholderImg>
            <LoadingContent>
                <LoadingPlaceholderTitle></LoadingPlaceholderTitle>

                <LoadingPlaceholderText></LoadingPlaceholderText>
                <LoadingPlaceholderText className='animation-delay'></LoadingPlaceholderText>

                <LoadingPlaceholderMeta>
                    <LoadingPlaceholderRead></LoadingPlaceholderRead>
                    <i className='iconfont'>&#xe61d;</i>
                    <LoadingPlaceholderSmall></LoadingPlaceholderSmall>
                    <i className='iconfont'>&#xe663;</i>
                </LoadingPlaceholderMeta>
            </LoadingContent>
        </LoadingPlaceholder>
    )
};
export default loading;
