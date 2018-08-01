import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.searchPosts = this.searchPosts.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://practiceapi.devmountain.com/api/posts')
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      });
  }

  updatePost(id, text) {
    console.log(`https://practiceapi.devmountain.com/api/posts?id=${id}`, text);
    axios
      .put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, { text })
      .then(response => {
        this.setState({ posts: response.data });
      });
  }

  deletePost(id) {
    axios
      .delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      });
  }

  createPost(text) {
    console.log('We are trying to make a post with this text: ' + text);

    axios
      .post(`https://practiceapi.devmountain.com/api/posts`, { text })
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      });
  }

  searchPosts(search) {
    let encoded = encodeURI(search);
    console.log(
      `https://practiceapi.devmountain.com/api/posts/?text=${encoded}`
    );

    axios
      .get(
        `https://practiceapi.devmountain.com/api/posts/filter?text=${encoded}`
      )
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header searchPostsFn={this.searchPosts} />

        <section className="App__content">
          <Compose createPostFn={this.createPost} />
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                text={post.text}
                date={post.date}
                id={post.id}
                updatePostFn={this.updatePost}
                deletePostFn={this.deletePost}
              >
                {post}
              </Post>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
