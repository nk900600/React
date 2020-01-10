import JsonPlaceholder from "../api/JsonPlaceholder";
import _ from 'lodash';
// export const FetchPost =async ()=>{
//     // bad approach
//     const response =await JsonPlaceholder.get('/posts');
//
//     return{
//         type: 'FETCH_POSTS',
//         payload: response
//     }
//
// };

export const FetchPost =()=>{
    // we used beacuse now we have middlware in redux thunk
    return async dispatch=>{
        const response =await JsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
};


// export const FetchUser = (id)=>{
//     return async dispatch =>{
//       const response= await JsonPlaceholder.get(`/users/${id}`);
//         dispatch({
//           type: "FETCH_USERS" ,
//           payload: response.data
//         })
//     }
// };


// this is method to hit api for one time (memoize method)
export const FetchUser = id=>dispatch=>{
    _FetchUser(id,dispatch);
};

const _FetchUser=_.memoize(async (id,dispatch)=>{
       const response= await JsonPlaceholder.get(`/users/${id}`);
        dispatch({
          type: "FETCH_USERS" ,
          payload: response.data
        });
});