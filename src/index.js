import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import PostsService from './services/Posts';

ReactDOM.render(<App postsService={new PostsService()} />, document.getElementById('root'));
