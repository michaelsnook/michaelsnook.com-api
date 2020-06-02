import React from 'react';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = '/api/v1/posts/index';
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => this.setState({ posts: response }))
      .catch(() => this.props.history.push('/'));
  }

  render() {
    const { posts } = this.state;
    const allPosts = posts.map((post, index) => (
      <div key={index} className="col-md-6 col-lg-4 pb-4">
        <div className="card h-100">
          {post.image && <img
            src={post.image}
            className="card-img-top"
            alt={`${post.title} image`}
          />}
          <div className="card-body d-flex align-items-start flex-column">
            <h4 className="card-title">{post.title}</h4>
            {!post.image && <p className="card-text">{post.excerpt}</p>}
            <Link to={`/posts/${post.id}`} className="mt-auto btn btn-sm btn-outline-secondary">
              View Post
            </Link>
          </div>
        </div>
      </div>
    ));
    const noPosts = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No posts yet. Why not <Link to="/posts/new">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="hero position-relative d-flex align-items-center justify-content-center w-100">
          <img className="Cover-image bottom" src="/como.jpg" alt="a picture of mountains" />
          <div className="overlay bg-dark position-absolute"></div>
          <div className="position-relative text-white container">
            <div className="row">
              <div className="col-12 col-md-8">
                <h1 className="display-4 text-white">Michael Snook&rsquo;s site</h1>
                <p className="text-white lead">A little weblog and project pad</p>
              </div>
              <div className="col-md-4 col-12">
                <img id="my-face" src="/my-circle-drawing.png" alt="A comic sketch of Michael Snook" />
              </div>
            </div>
          </div>
        </section>

        <div className="py-5">
          <main className="container">
            <div className="mb-3">
              <Link to="/posts/new" className="btn btn-secondary">
                Create New Post
              </Link>
              <span className="text-muted">
                &nbsp; (Please do not click this button unless you are authorized to do so (only Michael).)
              </span>
            </div>
            <div className="row align-content-stretch d-flex flex-wrap">

              {posts.length > 0 ? allPosts : noPosts}

            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Posts;
