import { getDB } from '~/utils/db.server'

export interface Post {
    id: number
    title: string
    content: string
    author: string
    createAt: Date
    updatedAt: Date
}

export async function getPosts(): Promise<Post[]>{
    const db = await getDB()
    const result = db.exec('select * from posts order by createdAt desc')
    return result[0]?.values.map(row=> ({
        id: row[0] as number,
        title: row[1] as string,
        content: row[2] as string,
        author: row[3] as string,
        createdAt: row[4] as Date,
        updatedAt: row[5] as Date
    })) || [];

}