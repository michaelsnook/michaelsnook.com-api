import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

class UpdatePost extends React.Component {
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
        title: '',
        name: '',
        content: '',
        excerpt: '',
        image: ''
      },
      changed: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
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

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  onChange(event) {
    const post = {...this.state.post, [event.target.name]: event.target.value };
    this.setState({ post });
    this.setState({ changed: true });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = `/api/v1/posts/update/${this.state.post.id}`;

    const body = {
      title: this.state.post.title,
      name: this.state.post.name,
      excerpt: this.state.post.excerpt,
      content: this.state.post.content,
      image: this.state.post.image
    }

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
      .then(() => console.log('updated the post'))
      .then(() => this.setState({ changed: false }))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="font-weight-normal my-3">
              Edit your post
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
                  value={this.state.post.title}
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
                    value={this.state.post.name}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="excerpt">Post Excerpt</label>
                <textarea
                  className="form-control"
                  id="excerpt"
                  name="excerpt"
                  rows="2"
                  onChange={this.onChange}
                  value={this.state.post.excerpt || ''}
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
                  value={this.state.post.content || ''}
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
                  value={this.state.post.image}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3 px-4" disabled={!this.state.changed}>
                Save post
              </button>
              <Link to={`/posts/${this.state.post.id}`} className="btn btn-outline-secondary px-4 mt-3 float-right">
                Exit
              </Link>
            </form>
          </div>
          <div className="col-lg-8">
            <Banner {...this.state.post} />
            <div className="row py-4">
              <div className="col-sm-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-sm-3"
                dangerouslySetInnerHTML={{
                  __html: `${this.state.post.content}`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePost;
