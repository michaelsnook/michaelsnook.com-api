import React from 'react';
import renderMarkdown from './renderMarkdown';

function dateStamp(text) {
  const out = new Date(text);
  try {
    return out.toLocaleString('en-IN',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );
  }
  catch(e) {
    return out.toDateString();
  }
}

function PostBody(props) {
  return (
    <div className="Post row py-4 px-3">
      <div className="col-sm-12 col-lg-6 col-md-8 py-sm-3">
        <p className="text-muted"><em>
          Posted on {dateStamp(props.created_at)}
        </em></p>
        <div
          dangerouslySetInnerHTML={{
            __html: renderMarkdown(props.content)
          }}
        />
      </div>
      <div className="col-sm-12 offset-md-1 col-md-2 py-sm-3 order-md-first">
        {props.children}
      </div>
    </div>
  );
}

export default PostBody;
