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
    <div className="row py-4 px-3">
      <div className="col-sm-12 col-lg-8 col-md-10 py-sm-3">
        <p className="text-muted"><em>
          Posted on {dateStamp(props.created_at)}
        </em></p>
        <div
          dangerouslySetInnerHTML={{
            __html: renderMarkdown(props.content)
          }}
        />
      </div>
      <div className="col-sm-12 col-md-2 order-md-first">
        {props.children}
      </div>
    </div>
  );
}

export default PostBody;
