import { Post, Option } from '../types'

import fs from 'fs'
import path from 'path'

const CWD_PATH = path.resolve(process.cwd(), '../packages/usehooks/src')

const getDemo = (name: string): Option<Buffer> => {
  const pathname = path.join(CWD_PATH, name, `${name}.demo.md`)
  return readFile(pathname)
}

const readFile = (pathname: string): Option<Buffer> => {
  try {
    return fs.readFileSync(pathname)
  } catch (error) {
    console.warn(`Document not found: ${pathname}`)
    return null
  }
}
const getHook = (name: string): Option<Buffer> => {
  const pathname = path.join(CWD_PATH, name, `${name}.md`)
  return readFile(pathname)
}
// 过滤出文件夹
const allPosts = fs.readdirSync(CWD_PATH).filter((dirname) => fs.lstatSync(path.join(CWD_PATH, dirname)).isDirectory())

export const getPosts = (): Post[] => {
  return allPosts
    .map((filename) => {
      const name = filename.replace(/\.mdx?$/, '')
      const slug = name.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      const href = `/react-hook/${slug}`
      const pathname = path.join(CWD_PATH, filename)
      const docs = readFile(path.join(pathname, filename + '.tsx'))
      const hook = getHook(name)
      const demo = getDemo(name)

      return { name, slug, href, docs, hook, demo }
    })
    .filter((post) => post.docs && post.hook && post.demo)
    .sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    }) as Post[]
}
