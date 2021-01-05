// import React, { useState } from 'react'

// const AddPostForm = ({ addPost }) => {
//   const initialFormState = {
//     title: '',
//     description: '',
//   }
//   const [post, setPost] = useState(initialFormState)

//   const handleInputChange = (event) => {
//     setPost({ ...post, [event.target.name]: event.target.value })
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const { title, description, } = post
//     if (!title || !description) return

//     addPost(post)
//     setPost(initialFormState)
//   }

//   return (
//     <form onSubmit={handleSubmit} className='add-user-form'>
//       <label>Post Title</label>
//       <input
//         type='text'
//         name='title'
//         value={post.title}
//         onChange={handleInputChange}
//       />

//       <label>Post Description</label>
//       <input
//         type='text'
//         name='description'
//         value={post.description}
//         onChange={handleInputChange}
//       />

//       <button>Add new post</button>
//     </form>
//   )
// }

// export default AddPostForm