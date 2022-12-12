import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import InputError from './components/InputError';
import AddPostPage from './pages/AddPostPage';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';

function App() {
  return (
    <div className='App container'>
      <Header />

      <Switch>
        <Route path={'/posts/:postId'}>
          <SinglePostPage />
        </Route>
        <Route path={'/posts'}>
          <PostsPage />
        </Route>
        <Route path={'/add-post'}>
          <AddPostPage />
        </Route>
        <Route path={'/home'} exact>
          <Redirect to={'/'} />
        </Route>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
