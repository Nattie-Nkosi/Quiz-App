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

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert("Copying is not allowed on this page.");
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

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
    <div className="min-h-[600px] flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        {/* Question Container - Fixed height */}
        <div className="min-h-[120px] mb-8">
          <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-300 no-select">
            {question.question}
          </h2>
        </div>

        {/* Options Container - Fixed height */}
        <div className="flex-grow min-h-[300px]">
          <div className="grid gap-4">
            {question.options.map((option) => (
              <label
                key={option}
                className="flex items-center p-4 border rounded-lg cursor-pointer
                  hover:border-violet-500 dark:hover:border-violet-400
                  transition-colors duration-200
                  bg-white dark:bg-gray-800 
                  border-gray-200 dark:border-gray-700"
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={currentOption === option}
                  onChange={() => setCurrentOption(option)}
                  className="form-radio h-5 w-5 text-violet-600 dark:text-violet-400 
                    focus:ring-violet-500 dark:focus:ring-violet-400"
                />
                <span className="ml-3 text-lg text-violet-800 dark:text-violet-200">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Error Message - Fixed height */}
        <div className="h-8 mb-4">
          {hasError && (
            <p className="text-red-600 dark:text-red-400 animate-pulse">
              Please select an answer.
            </p>
          )}
        </div>

        {/* Buttons Container - Fixed height */}
        <div className="h-16 flex items-center gap-4">
          {!isFirstQuestion && (
            <button
              type="button"
              onClick={onPrevious}
              className="min-w-[100px] bg-violet-500 dark:bg-violet-700 text-white px-6 py-2 
                rounded shadow hover:bg-violet-600 dark:hover:bg-violet-800 
                transition duration-200"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            className="min-w-[100px] bg-violet-700 dark:bg-violet-800 text-white px-6 py-2 
              rounded shadow hover:bg-violet-800 dark:hover:bg-violet-900 
              transition duration-200"
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
          <button
            type="button"
            onClick={onReview}
            className="min-w-[140px] bg-gray-300 dark:bg-gray-700 text-violet-800 
              dark:text-violet-200 px-6 py-2 rounded shadow 
              hover:bg-gray-400 dark:hover:bg-gray-600 
              transition duration-200"
          >
            Review Answers
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionComponent;
