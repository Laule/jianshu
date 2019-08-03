import {SEARCH_FOCUS,SEARCH_BLUR} from './actionTypes';



export const handleInputFocus = () =>({
    type:SEARCH_FOCUS
});

export const handleInputBlur = () =>({
    type:SEARCH_BLUR
});
