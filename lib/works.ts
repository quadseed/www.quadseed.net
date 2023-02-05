import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const worksDirectory = path.join(process.cwd(), 'works')

export function getWorksData() {
    const fileNames = fs.readdirSync(worksDirectory)
    const allWorksData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(worksDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...(matterResult.data as { title: string, description: string })
        }
    })

    return allWorksData
}

export function getAllWorkIds() {
    const fileNames = fs.readdirSync(worksDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getWorkData(id: string) {
    const fullPath = path.join(worksDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...(matterResult.data as { title: string, description: string })
    }
}