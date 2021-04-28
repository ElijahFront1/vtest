import './app.scss';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPosts, newData } from './store/actions.js'
import Post from './components/post/Post'
import { Row } from "react-bootstrap"

function App() {
  const dispatch = useDispatch()

  let posts = useSelector((reducer) => {
    const { postsData, searchValue } = reducer.reducers
    if (!searchValue) {
      return postsData
    }
    return postsData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
  })

  React.useEffect(() => {
    dispatch(newData())
  }, []);

  const searchChangeHandler = (e) => {
    dispatch(searchPosts(e.target.value))
  }

  return (
    <div className="general-wrapper">
      <input type="text" placeholder="search by name" onChange={e => searchChangeHandler(e)} />
      <Row>
        {posts.map(obj => <Post
          key={obj.myId} {...obj} />
        )}
      </Row>
    </div>
  );
}

export default App;
