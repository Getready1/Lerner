export enum Artikel {
    der = 1,
    die,
    das
}

export interface Noun {
    text: string,
    artikel: Artikel,
    rightAnswers: number
}