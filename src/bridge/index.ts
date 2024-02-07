import CaptionDisplay from './CaptionDisplay'
import CharactersCounter from './ChractersCounter'
import Draft from './Draft'
import SimpleDisplay from './SimpleDisplay'

const title = 'tite'
const author = 'author'
const content = ['content1', 'content2', 'content3']

const draft = new Draft(title, author, content)

draft.print(new SimpleDisplay())
draft.print(new CaptionDisplay())

const draft2 = new CharactersCounter(title, author, content)
draft2.print(new SimpleDisplay())
draft2.print(new CaptionDisplay())
console.log(draft2.getCharactersCount())
