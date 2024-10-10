// app/quiz/components/result.tsx

import { FC } from "react";
import { Question } from "../types";

interface ResultProps {
  questions: Question[];
  answers: string[];
}

const Result: FC<ResultProps> = ({ questions, answers }) => {
  const score = answers.reduce((acc, answer, idx) => {
    return answer === questions[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Quiz Completed</h2>
      <p className="text-lg">
        Your Score: {score} out of {questions.length}
      </p>
      <div className="space-y-2">
        {questions.map((question, idx) => (
          <div key={question.id} className="p-4 border rounded">
            <p className="font-semibold">{question.question}</p>
            <p>
              Your Answer: {answers[idx]}{" "}
              {answers[idx] === question.correctAnswer ? "✅" : "❌"}
            </p>
            {answers[idx] !== question.correctAnswer && (
              <p>Correct Answer: {question.correctAnswer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
