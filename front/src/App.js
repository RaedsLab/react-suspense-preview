import React from 'react';
import axios from "./axios"
import './App.css';

const Loading = React.memo(() => <div>Loading...</div>);

const Profile = () => {
  const user = axios.read('/api/user');
  return  (<div>{user.name}</div>)
}

const Posts = () => {
  const posts = axios.read('/api/posts');

  return  (<ul>
    {
      posts.map(post => (<li key={post.id}>
        {post.title}
        </li>
        ))
    }
  </ul>)
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <React.Suspense fallback={<Loading />} maxDuration={1000}>
          <Profile />
          <React.Suspense fallback={<Loading />} maxDuration={1000}>
            <Posts />
          </React.Suspense>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
