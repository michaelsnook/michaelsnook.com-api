import React from 'react';
import { Link } from 'react-router-dom';

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
      }
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
      /*.then(() => {
        ['title', 'name', 'content', 'excerpt', 'image'].map(key => {
          console.log(key + ': ' + this.state.post[key]);
          el = document.querySelector(`input[name="${key}"]`) || null;
          if (el) el.value = this.state.post[key];
        });
      })*/
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
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = `/api/v1/posts/update/${this.state.post.id}`;
    const { title, name, content, excerpt, image } = this.state.post;

    // name must be present, and one of title, content or image must be present
    if (name.length == 0 || title.length == 0 && content.length == 0 && image.length == 0)
      return;

    const body = {
      title,
      name,
      content: content.replace(/\n\n/g, '<br><br>'),
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
    const { post } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-12">
                <h1 className="font-weight-normal mb-5">
                  Edit your post.
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
                    Save post
                  </button>
                  <Link to="/posts" className="btn btn-link mt-3">
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="hero position-relative d-flex align-items-center justify-content-center w-100">
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
                  <button type="button" className="btn ml-sm-2 btn-outline-danger" onClick={this.deletePost}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePost;
