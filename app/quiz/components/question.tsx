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
}

const answerSchema = z.string().nonempty("Please select an answer.");

const QuestionComponent: FC<QuestionComponentProps> = ({
  question,
  onAnswerSelect,
  onPrevious,
  selectedOption,
  isFirstQuestion,
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">{question.question}</h2>
      <div className="space-y-2">
        {question.options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={currentOption === option}
              onChange={() => setCurrentOption(option)}
              className="form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {hasError && <p className="text-red-600">Please select an answer.</p>}
      <div className="flex space-x-4">
        {!isFirstQuestion && (
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default QuestionComponent;
