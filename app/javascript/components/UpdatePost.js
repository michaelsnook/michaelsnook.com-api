import React from 'react';
import { Link } from 'react-router-dom';
import PostBody from './PostBody';

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
        created_at: '',
        content: '',
        excerpt: '',
        image: '',
        published: false,
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
      .then(response => {
        response.created_at = new Date(response.created_at).toISOString().substr(0, 10);
        return response;
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
    const val = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value
    const post = { ...this.state.post, [event.target.name]: val };
    this.setState({ post });
    this.setState({ changed: true });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = `/api/v1/posts/update/${this.state.post.id}`;

    const body = {
      title: this.state.post.title,
      name: this.state.post.name,
      created_at: this.state.post.created_at,
      excerpt: this.state.post.excerpt,
      content: this.state.post.content,
      image: this.state.post.image,
      published: this.state.post.published,
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
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-4 mb-5 pl-3">
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
                <label htmlFor="postDate">Post date</label>
                <input
                  type="date"
                  name="created_at"
                  id="postDate"
                  className="form-control"
                  onChange={this.onChange}
                  value={this.state.post.created_at}
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
                  value={this.state.post.excerpt || ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Post Content</label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="10"
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
              <div className="form-group">
                <label className="form-check-label" for="publishedCheck">Publish&nbsp;</label>
                <input
                  type="checkbox"
                  name="published"
                  className="form-check-input ml-4"
                  id="publishedCheck"
                  onChange={this.onChange}
                  checked={this.state.post.published}
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
          <div className="col-lg-8 px-0">
            <PostBody {...this.state.post} />
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePost;
