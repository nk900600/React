import axios from 'axios';

// const searchImages=term =>{
//
//
// }


export default axios.create({
    Baseurl: 'http://api.unsplash.com',
    headers: {
                Authorization :
                    'Client-ID 4641f9893bbb26bdff91caa92748740769a2a90b4595413e639a77e8485cbdbf'
            }
});