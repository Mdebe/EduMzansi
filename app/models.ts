// app/models.ts
export type Subject = "Maths" | "Science";

export type QuestionType = "MCQ" | "Structured" | "StepByStep" | "Practical" | "Graph";

export type Question = {
  id: string;
  subject: Subject;
  topic: string;
  type: QuestionType;
  questionText: string;
  options?: string[]; // For MCQ
  answer: string;
  solution?: string; // Step-by-step or memo
  formulaRef?: string; // For Maths
};

export type Test = {
  id: string;
  subject: Subject;
  title: string;
  questions: Question[];
  randomized?: boolean;
  dateCreated: string;
};

export type Teacher = {
  id: string;
  name: string;
};