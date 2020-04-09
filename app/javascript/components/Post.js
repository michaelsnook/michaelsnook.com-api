import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import PostBody from './PostBody';

class Post extends React.Component {
  constructor(props) {
    super(props);

    const {
      match: {
        params: { id }
      }
    } = this.props;

    this.state = {
      post: {
        id,
        name: ''
      }
    };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    const url = `/api/v1/posts/show/${this.state.post.id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => this.setState({ post: response }))
      .catch(() => this.props.history.push('/posts'));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  deletePost() {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const url = `/api/v1/posts/destroy/${this.state.post.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/posts"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { post } = this.state;
    return (
      <div className="container-fluid px-0">
        <Banner {...post} />
        <PostBody {...post}>
          <>
            <Link to="/posts" className="btn btn-block btn-link">
              « Back to posts
            </Link>
            <Link to={`/posts/${post.id}/update`} className="btn btn-block btn-outline-primary">
              Edit Post
            </Link>
            <button type="button" className="btn btn-block btn-outline-danger" onClick={this.deletePost}>
              Delete Post
            </button>
          </>
        </PostBody>
      </div>
    );
  }
}

export default Post;
