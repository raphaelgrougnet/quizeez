export interface Quiz {
    id:        number;
    img:       string;
    name:      string;
    questions: Question[];
}

export interface Question {
    id:      number;
    text:    string;
    options: Option[];
}

export interface Option {
    id:        number;
    label:     Label;
    text:      string;
    isCorrect: boolean;
}

export enum Label {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
}
