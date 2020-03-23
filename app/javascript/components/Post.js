import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: ''
      }
    };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/posts/show/${id}`;

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

  deleteRecipe() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/posts/destroy/${id}`;
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
      <>
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={post.image}
            alt={`${post.title} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {post.title}
          </h1>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <button type="button" className="btn btn-outline-primary">
                Edit Post
              </button>
              <button type="button" className="btn ml-sm-2 btn-outline-danger" onClick={this.deleteRecipe}>
                Delete Post
              </button>
            </div>
            <div className="col-sm-12 col-lg-7 py-sm-3">
              <h5 className="mb-2">Post content</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${post.content}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <Link to="/posts" className="btn btn-outline-secondary mr-2 pull-md-left">
                « Back to posts
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Post;