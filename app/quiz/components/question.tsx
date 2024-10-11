// app/quiz/components/question.tsx
"use client";

import { FC, useState, useEffect } from "react";
import { Question } from "../types";
import { z } from "zod";

interface QuestionComponentProps {
  question: Question;
  onAnswerSelect: (answer: string) => void;
  onPrevious: () => void;
  selectedOption: string;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  onReview: () => void;
}

const answerSchema = z.string().nonempty("Please select an answer.");

const QuestionComponent: FC<QuestionComponentProps> = ({
  question,
  onAnswerSelect,
  onPrevious,
  selectedOption,
  isFirstQuestion,
  isLastQuestion,
  onReview,
}) => {
  const [currentOption, setCurrentOption] = useState(selectedOption || "");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentOption(selectedOption || "");
    setHasError(false);
  }, [question, selectedOption]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = answerSchema.safeParse(currentOption);
    if (!validation.success) {
      setHasError(true);
      return;
    }

    setHasError(false);
    onAnswerSelect(currentOption);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-violet-800">
        {question.question}
      </h2>
      <div className="space-y-4">
        {question.options.map((option) => (
          <label key={option} className="flex items-center space-x-3">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={currentOption === option}
              onChange={() => setCurrentOption(option)}
              className="form-radio h-5 w-5 text-violet-600 transition duration-150"
            />
            <span className="text-lg text-violet-800">{option}</span>
          </label>
        ))}
      </div>
      {hasError && (
        <p className="text-red-600 animate-pulse">Please select an answer.</p>
      )}
      <div className="flex space-x-4">
        {!isFirstQuestion && (
          <button
            type="button"
            onClick={onPrevious}
            className="bg-violet-500 text-white px-6 py-2 rounded shadow hover:bg-violet-600 transition duration-200"
          >
            Previous
          </button>
        )}
        <button
          type="submit"
          className="bg-violet-700 text-white px-6 py-2 rounded shadow hover:bg-violet-800 transition duration-200"
        >
          {isLastQuestion ? "Finish" : "Next"}
        </button>
        <button
          type="button"
          onClick={onReview}
          className="bg-gray-300 text-violet-800 px-6 py-2 rounded shadow hover:bg-gray-400 transition duration-200"
        >
          Review Answers
        </button>
      </div>
    </form>
  );
};

export default QuestionComponent;
