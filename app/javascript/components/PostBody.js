import React from 'react'
import renderMarkdown from './renderMarkdown'

function dateStamp(text) {
  const out = new Date(text)
  try {
    return out.toLocaleString('en-IN',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    )
  }
  catch(e) {
    return out.toDateString();
  }
}

export default function PostBody(props) {
  return (
    <div className="Post row py-4 px-3 mx-0 d-flex justify-content-center">
      <article className="py-sm-3 px-1 px-md-0 col">
        <h2>{props.title}</h2>
        <p className="text-muted"><em>
          Posted on {dateStamp(props.created_at)}
        </em></p>
        <img className="img-fluid mb-4" src={props.image} alt="" />
        <div
          dangerouslySetInnerHTML={{
            __html: renderMarkdown(props.content)
          }}
        />
      </article>
      { props.children &&
        <div className="col-sm-12 col-md-3 col-lg-2 py-sm-3 order-md-first">
          {props.children}
        </div>
      }
    </div>
  )
}
