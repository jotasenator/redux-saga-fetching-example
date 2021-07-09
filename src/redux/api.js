import axios from 'axios'

export const loadPostApi = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts`)
}

// export const loadPostApi = async () => {
//     await axios.get(`https://jsonplaceholder.typicode.com/posts`)
//         .then((response) => {
//             console.log('Response', response);
//             return response;
//         })
//         .catch((error) => {
//             console.log('error', error);
//         })
// }