// app/quiz/types/index.ts

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}
