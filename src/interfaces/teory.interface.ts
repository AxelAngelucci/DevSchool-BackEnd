export interface Lesson {
    _id?: any,
    type: string,
    link: string,
    title: string,
    description: string
}

export interface ModuleTeoryI {
    _id: any,
    name: string,
    lessons?: Lesson[]
}