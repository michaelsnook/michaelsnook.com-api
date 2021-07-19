import marked from 'marked'

export default function renderMarkdown(text) {
  return !text
    ? ''
    : marked(text).replace(/\<img /g, '<img class="img-fluid" ')
}
