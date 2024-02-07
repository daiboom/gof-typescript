import File from './File'
import Folder from './Folder'

const root = new Folder('root')
root.add(new File('a.txt', 1000))
root.add(new File('b.txt', 2000))

const sub1 = new Folder('sub1')
root.add(new File('sa.txt', 100))
root.add(new File('sb.txt', 4000))

const subSub = new Folder('sub3')
sub1.add(subSub)
subSub.add(new File('subSub1.txt', 2250))
subSub.add(new File('subSub2.txt', 5340))

const sub2 = new Folder('sub2')
root.add(sub2)
sub2.add(new File('sub2a.txt', 250))
sub2.add(new File('sub2b.txt', 340))

const dom = document.querySelector('#list') as HTMLElement
console.log('list dom ===> ', dom)
root.list(dom)
