import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPostStart } from './redux/app.actions'


export const Fetching = () => {
    const dispatch = useDispatch()

    const fetchPost = () => {
        dispatch(loadPostStart())
    }

    const state = useSelector(state => state.appReducer)
    console.log(state)


    return (
        <div>
            <h1>Fetching from https://jsonplaceholder.typicode.com</h1>
            <button onClick={fetchPost}>Fetching</button>
            {
                !state.loading && state.posts.map((post) => (
                    <li key={post.id}><h2>{post.title}</h2></li>

                ))
            }



        </div>
    )
}
