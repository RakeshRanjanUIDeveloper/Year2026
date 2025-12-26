import React from 'react'
import useFetch from './useFetch';
const CustomHook = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  return (
   <React.Fragment>
   <ul>
   {data.map((post) => (
     <li key={post.id}>{post.title}</li>
   ))}
 </ul>
   </React.Fragment>
  )
}

export default CustomHook