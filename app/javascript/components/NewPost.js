import React from 'react';
import { Link } from 'react-router-dom';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      created_at: new Date().toISOString().substr(0, 10),
      content: '',
      excerpt: '',
      image: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = '/api/v1/posts/create';
    const { title, name, created_at, content, excerpt, image } = this.state;

    // name must be present, and one of title, content or image must be present
    if (name.length == 0 || title.length == 0 && content.length == 0 && image.length == 0)
      return;

    const body = {
      title,
      name,
      created_at,
      content,
      excerpt,
      image
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => this.props.history.push(`/posts/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Draft a new post.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="postTitle">Post title</label>
                <input
                  type="text"
                  name="title"
                  id="postTitle"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postName">Post URL e.g "post-title-slug"</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">/posts/</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="postName"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="postDate">Post date</label>
                <input
                  type="date"
                  name="created_at"
                  id="postDate"
                  className="form-control"
                  onChange={this.onChange}
                  value={this.state.created_at}
                />
              </div>
              <div className="form-group">
                <label htmlFor="excerpt">Post Excerpt</label>
                <textarea
                  className="form-control"
                  id="excerpt"
                  name="excerpt"
                  rows="2"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Post Content</label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="5"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postImage">Post image</label>
                <input
                  type="text"
                  name="image"
                  id="postImage"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Create Post
              </button>
              <Link to="/posts" className="btn btn-link mt-3">
                Back to Posts
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
