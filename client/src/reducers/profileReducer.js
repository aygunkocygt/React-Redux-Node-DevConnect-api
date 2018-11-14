import {CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING, GET_PROFILES,GET_POSTS, GET_POST} from '../actions/types';

const initialState = {
    profile: null,
    profiles:null,
    loading: false
};

export default function (state = initialState, action) {
 switch (action.type) {
     case PROFILE_LOADING:
         return {
             ...state,
             loading: true
         };
     case GET_PROFILE:
         return {
             ...state,
             profile: action.payload,
             loading:false
         };
     case GET_PROFILES:
         return {
             ...state,
             profiles: action.payload,
             loading:false
         };
     case CLEAR_CURRENT_PROFILE:
         return {
             ...state,
             profile: null
         };
     case GET_POSTS:
         return{
             ...state,
             posts: action.payload,
             loading:false
         };
     case GET_POST:
         return{
             ...state,
             post:action.payload,
             loading: false
         };
     default:
         return state;
 }
}