import Display from './Display'
import Draft from './Draft'

export default class SimpleDisplay implements Display {
  title(draft: Draft): void {
    console.log(draft.getTitle())
  }
  author(draft: Draft): void {
    console.log(draft.getAuthor())
  }
  content(draft: Draft): void {
    draft.getContent().forEach((content) => {
      console.log(content)
    })
  }
}
