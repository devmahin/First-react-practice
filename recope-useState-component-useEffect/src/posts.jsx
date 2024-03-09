import { useEffect, useState } from "react"
import Display from "./Displaypost"

export default function Posts(){
    const [post,setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div className='box'>
            <h1>Posts : {post.length}</h1>
             {
                post.map(val => <Display props={val}></Display>)
             }
        </div>
    )
}


// 1 create a state to store the data
