import React from 'react';

export default () => (
  <div className="container p-5">
    <section>
      <h2>Primary brand colors</h2>
      <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
      <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
      <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
      <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
      <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
      <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
      <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
      <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
      <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
    </section>
    <section>
      <h2>Alerts</h2>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done, Primary color!</h4>
        <p>Aww yeah, you primarily read this important alert message. This example text is going to run a bit 
          longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr />
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
      <div className="alert alert-secondary" role="alert">
        This is a secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        This is a light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        This is a dark alert—check it out!
      </div>
    </section>
    <section>
      <h2>Buttons</h2>
      <p>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>
      </p>
      <p>
        <button type="button" className="btn btn-outline-primary">Primary</button>
        <button type="button" className="btn btn-outline-secondary">Secondary</button>
        <button type="button" className="btn btn-outline-success">Success</button>
        <button type="button" className="btn btn-outline-danger">Danger</button>
        <button type="button" className="btn btn-outline-warning">Warning</button>
        <button type="button" className="btn btn-outline-info">Info</button>
        <button type="button" className="btn btn-outline-light">Light</button>
        <button type="button" className="btn btn-outline-dark">Dark</button>
      </p>
      <p>
        <button type="button" className="btn btn-primary btn-lg">Large button</button>
        <button type="button" className="btn btn-secondary btn-lg">Large button</button>
      </p>
      <p>
        <button type="button" className="btn btn-primary btn-sm">Small button</button>
        <button type="button" className="btn btn-secondary btn-sm">Small button</button>
      </p>
      <p>
        <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
        <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
      </p>
    </section>
    <section>
      <h2>Tables</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Typography</h2>
      <h3>Display text</h3>
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h3>Regular headings</h3>
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>
      <h3>Lead paragraph</h3>
      <p className="lead">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
      </p>
      <h3>Styled text</h3>
      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      <p><del>This line of text is meant to be treated as deleted text.</del></p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
      <p><u>This line of text will render as underlined</u></p>
      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
      <h3>Blockquote</h3>
      <blockquote className="blockquote">
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
      <h3>Lists</h3>
      <ul className="list-unstyled">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ul>
      <h3>Description lists</h3>
      <dl className="row">
        <dt className="col-sm-3">Description lists</dt>
        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

        <dt className="col-sm-3">Euismod</dt>
        <dd className="col-sm-9">
          <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
          <p>Donec id elit non mi porta gravida at eget metus.</p>
        </dd>

        <dt className="col-sm-3">Malesuada porta</dt>
        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
        <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

        <dt className="col-sm-3">Nesting</dt>
        <dd className="col-sm-9">
          <dl className="row">
            <dt className="col-sm-4">Nested definition list</dt>
            <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
          </dl>
        </dd>
      </dl>
      <h3>Code</h3>
      <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
      <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
      &lt;p&gt;And another line of sample text here...&lt;/p&gt;
      </code></pre>
      <h3>Keyboard input</h3>
      To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br />
      To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
      <h3>Sample output</h3>
      <samp>This text is meant to be treated as sample output from a computer program.</samp>
    </section>
  </div>
);