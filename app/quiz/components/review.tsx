// app/quiz/components/review.tsx
"use client";

import { FC, useEffect } from "react";
import { Question } from "../types";

interface ReviewProps {
  questions: Question[];
  answers: string[];
  onEditAnswer: (index: number) => void;
  onSubmit: () => void;
}

const Review: FC<ReviewProps> = ({
  questions,
  answers,
  onEditAnswer,
  onSubmit,
}) => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-violet-800">
        Review Your Answers
      </h2>
      <div className="space-y-4">
        {questions.map((question, idx) => (
          <div
            key={question.id}
            className={`p-4 border rounded shadow-sm hover:shadow-md transition duration-200 cursor-pointer no-select ${
              !answers[idx] ? "border-red-500" : ""
            }`}
            onClick={() => onEditAnswer(idx)}
          >
            <p className="font-semibold text-violet-800">{question.question}</p>
            <p>
              Your Answer:{" "}
              {answers[idx] || (
                <span className="text-red-600">No answer selected</span>
              )}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={onSubmit}
        className="bg-violet-700 text-white px-6 py-2 rounded shadow hover:bg-violet-800 transition duration-200"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default Review;
