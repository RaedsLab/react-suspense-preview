import React from 'react';
import axios from "./axios"
import './App.css';

const Loading = React.memo(() => <div>Loading...</div>);


// Error boundaries currently have to be classes.
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const Fail = () => {
  const nope = axios.read('/api/404');
  return  (<div>{nope}</div>)
}

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
          <Posts />
          <ErrorBoundary fallback={<p>Could not fetch</p>}>
            <Fail />
          </ErrorBoundary>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
