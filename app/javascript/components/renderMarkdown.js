import marked from 'marked';

function renderMarkdown(text) {
  return !text? '' : marked(text)
    .replace(/\<img /g, '<img class="img-fluid" ');
}

export default renderMarkdown;
