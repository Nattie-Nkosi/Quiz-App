// app/quiz/components/result.tsx

import { FC } from "react";
import { Question } from "../types";

interface ResultProps {
  questions: Question[];
  answers: string[];
}

const Result: FC<ResultProps> = ({ questions, answers }) => {
  const totalQuestions = questions.length;
  const correctAnswers = answers.reduce((acc, answer, idx) => {
    return answer === questions[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  const percentageScore = (correctAnswers / totalQuestions) * 100;

  // Determine status
  let status = "";
  if (percentageScore === 100) {
    status = "Excellence";
  } else if (percentageScore >= 80) {
    status = "Passed";
  } else {
    status = "Failed";
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quiz Completed</h2>
      <div className="space-y-4">
        <p className="text-lg">
          You scored {correctAnswers} out of {totalQuestions} (
          {percentageScore.toFixed(2)}%)
        </p>
        <p
          className={
            status === "Excellence"
              ? "text-green-600 font-semibold"
              : status === "Passed"
              ? "text-blue-600 font-semibold"
              : "text-red-600 font-semibold"
          }
        >
          Status: {status}
        </p>
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
          <div
            className={
              `h-full ` +
              (status === "Excellence"
                ? "bg-green-600"
                : status === "Passed"
                ? "bg-blue-600"
                : "bg-red-600")
            }
            style={{ width: `${percentageScore}%` }}
          ></div>
        </div>
        {/* Optional: Additional Message */}
        <p className="text-md">
          {status === "Excellence"
            ? "Outstanding performance! You have mastered this quiz."
            : status === "Passed"
            ? "Great job! You have passed the quiz."
            : "Unfortunately, you did not pass. Please review the material and try again."}
        </p>
        {/* Optional: Retake Quiz Button */}
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Retake Quiz
        </button>
      </div>
      {/* Display each question and user's answer */}
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
