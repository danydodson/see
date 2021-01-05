// import React, { useState, useEffect } from 'react'
// import AddPostForm from './components/AddPostForm'
// import PostsTable from './components/PostsTable'
// import axios from 'axios'
// import './App.css'

// const Posts = () => {

//   const [ posts, setPosts] = useState([])

//   useEffect(() => { getPosts() }, [])

//   const getPosts = async () => {
//     try {
//       let result = await axios.get('/post/s')
//       setPosts(result.data.posts)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const addPost = async (post) => {
//     try {
//       let result = await axios.post('/post/new', post)
//       setPosts([...posts, result.data.post])
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <>
//       <h1>Posts Management System</h1>
//       <div className='flex-row'>
//         <div className='flex-large'>
//           <h2>Add post</h2>
//           <AddPostForm addPost={addPost} posts={posts} />
//         </div>
//       </div>

//       <div className='flex-large'>
//         <h2>Posts</h2>
//         <PostsTable posts={posts} />
//       </div>
//     </>
//   )
// }

// export default Posts
