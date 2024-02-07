import Article from './Article'
import EditableDisplayArticle from './EditableDisplayArticle'
import SimpleDisplayArticle from './SimpleDisplayArticle'

const article = new Article('제목입니다.', ['내용1', '내용2'], '작성자')

const display = new SimpleDisplayArticle(article)

const domContentInsert = (
  display: EditableDisplayArticle | SimpleDisplayArticle
) => {
  const domContent = document.querySelector('.content')
  if (domContent) {
    domContent.innerHTML = display.displayHtml()
  }
}

domContentInsert(display)

document.querySelector('.edit-mode')?.addEventListener('change', (event) => {
  let display
  if ((<HTMLInputElement>event.target).checked) {
    display = new EditableDisplayArticle(article)
    domContentInsert(display)
  } else {
    display = new SimpleDisplayArticle(article)
    domContentInsert(display)
  }
})
