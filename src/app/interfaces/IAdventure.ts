import { IComment } from "./IComment"

export interface IAdventure {
    id: number,
    title: string,
    image: string,
    description: string,
    level: string,
    duration: string,
    mountainRange: string,
    numberOfParticipants: string,
    availability: string,
    defaultCommentsLength: number;
    comments: IComment[]
}
