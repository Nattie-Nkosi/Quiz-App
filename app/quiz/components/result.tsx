// app/quiz/components/result.tsx

import { FC } from "react";
import { Question } from "../types";
import StudyReferences from "../components/study-references";

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

  // Determine status color with dark mode variants
  const statusColor =
    status === "Excellence"
      ? "text-green-600 dark:text-green-400"
      : status === "Passed"
      ? "text-violet-600 dark:text-violet-400"
      : "text-red-600 dark:text-red-400";

  const progressBarColor =
    status === "Excellence"
      ? "bg-green-600 dark:bg-green-500"
      : status === "Passed"
      ? "bg-violet-600 dark:bg-violet-500"
      : "bg-red-600 dark:bg-red-500";

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-violet-800 dark:text-violet-300">
        Quiz Completed
      </h2>
      <div className="space-y-4">
        <p className="text-lg dark:text-gray-200">
          You scored {correctAnswers} out of {totalQuestions} (
          {percentageScore.toFixed(2)}%)
        </p>
        <p className={`${statusColor} font-semibold`}>Status: {status}</p>
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full ${progressBarColor} transition-all duration-500`}
            style={{ width: `${percentageScore}%` }}
          ></div>
        </div>
        {/* Optional: Additional Message */}
        <p className="text-md dark:text-gray-300">
          {status === "Excellence"
            ? "Outstanding performance! You have mastered this quiz."
            : status === "Passed"
            ? "Great job! You have passed the quiz."
            : "Unfortunately, you did not pass. Please review the material and try again."}
        </p>
        {/* Retake Quiz Button */}
        <button
          onClick={() => window.location.reload()}
          className="bg-violet-700 dark:bg-violet-600 text-white px-6 py-2 rounded shadow 
            hover:bg-violet-800 dark:hover:bg-violet-700 transition duration-200"
        >
          Retake Quiz
        </button>
      </div>
      {/* Display each question and user's answer */}
      <div className="space-y-4">
        {questions.map((question, idx) => (
          <div
            key={question.id}
            className="p-4 border rounded shadow-sm hover:shadow-md transition duration-200
              dark:bg-gray-800 dark:border-gray-700 dark:hover:border-violet-500"
          >
            <p className="font-semibold text-violet-800 dark:text-violet-300">
              {question.question}
            </p>
            <p className="dark:text-gray-300">
              Your Answer: {answers[idx]}{" "}
              <span className="ml-2">
                {answers[idx] === question.correctAnswer ? "✅" : "❌"}
              </span>
            </p>
            {answers[idx] !== question.correctAnswer && (
              <p className="mt-2 text-green-600 dark:text-green-400">
                Correct Answer: {question.correctAnswer}
              </p>
            )}
          </div>
        ))}
        <StudyReferences />
      </div>
    </div>
  );
};

export default Result;
