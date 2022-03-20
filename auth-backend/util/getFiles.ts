import { promises as fs } from 'fs'
import * as path from 'path'

const getFiles = async (directory: string): Promise<string[]> => {
    const getFiles = await fs.readdir(directory)
    return getFiles.map((file: string) => path.join(directory, file))
}

export default getFiles
