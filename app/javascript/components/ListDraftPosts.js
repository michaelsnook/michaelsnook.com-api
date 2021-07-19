import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'

class ListDraftPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      user: null
    }
  }

  componentDidMount() {
    const url = '/api/v1/posts/drafts';
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else if (response.status === 401) {
          this.props.history.push({
            pathname: `/login`,
            //state: {goal_uri: '/posts/drafts', message: ''},
          })
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => this.setState({ posts: response }))
  }

  render() {
    const { posts } = this.state

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
            <Link to={`/posts/${post.id}/update`} className="mt-auto btn btn-sm btn-outline-secondary">
              Continue Drafting
            </Link>
          </div>
        </div>
      </div>
    ))

    const noPosts = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No draft posts yet. Why not <Link to="/posts/new">create one</Link>
        </h4>
      </div>
    )

    return (
      <>
        <Banner />
        <div className="py-5">
          <main className="container">
            <h2>Your Unfinished Drafts</h2>
            { this.state.user && loginButton() }
            <div className="row align-content-stretch d-flex flex-wrap">

              {posts.length > 0 ? allPosts : noPosts}

            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    )
  }
}

export default ListDraftPosts
