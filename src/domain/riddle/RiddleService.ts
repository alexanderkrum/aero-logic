export interface Riddle {
    id: string;
    content: string;
    answers: {
        id: string;
        text: string;
    }[];
}
