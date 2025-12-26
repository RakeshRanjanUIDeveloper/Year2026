import React, { useEffect, useState } from 'react'
import DropDownPaginationChild from './DropDownPaginationChild';

const DropDownPaginationParent = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const PERPAGE=10;
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    const makeAPICall = async (page, PERPAGE) =>{
        const res = await fetch(`${API_URL}?_page=${page}&_limit=${PERPAGE}`);
        const data = await res.json();
        setPosts(data);
    }
    useEffect(()=>{
        makeAPICall(page, PERPAGE)
    },[page])
  return (
    <React.Fragment>
        <label htmlFor='page'>Page</label>
        <select onChange={(e) => setPage(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <div className='posts'>
        {
            posts.map((post)=>(
                <DropDownPaginationChild post={post} key={post.id} />
            ))
        }
        </div>
    </React.Fragment>
  )
}

export default DropDownPaginationParent