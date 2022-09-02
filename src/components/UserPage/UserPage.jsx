import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {selectUserById} from "../../redux/slices/usersSlice";
import {selectPosts} from "../../redux/slices/profileSlice";


export const UsersPage = () => {
  let params = useParams();
  const userId = params.id

  const user = useSelector(state => selectUserById(state, userId))

  const postsForUser = useSelector(state => {
    const allPosts = selectPosts(state)
    return allPosts.filter(post => post.author === Number(userId))
  })
  console.log(postsForUser)

  if (!user) {
    return <div>User not found</div>
  }

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.heading}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  )
}