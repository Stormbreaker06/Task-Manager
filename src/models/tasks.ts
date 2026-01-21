export enum Priority{
    LOW="low",
    MEDIUM="medium",
    HIGH="high"
}
export interface Task{
    readonly id :number,
    readonly createdAt:Date
    name:string
    description?:string
    priority: Priority
}
