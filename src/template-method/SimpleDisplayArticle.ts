import Article from './Article'
import DisplayArticleTemplate from './DisplayArticleTemplate'

export default class SimpleDisplayArticle extends DisplayArticleTemplate {
  protected titleHtml(): string {
    return `<h1>${this.article.getTile()}</h1>`
  }

  protected contentHtml(): string {
    const items = this.article.getContent().map((item) => `<li>${item}</li>`)
    return `<ul>${items.join('')}</ul>`
  }

  protected footerHtml(): string {
    return `<footer>${this.article.getFooter()}</footer>`
  }

  constructor(article: Article) {
    super(article)
  }
}
