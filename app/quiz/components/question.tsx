// app/quiz/components/question.tsx
"use client";

import { FC, useState } from "react";
import { Question } from "../types";
import { z } from "zod";

interface QuestionComponentProps {
  question: Question;
  onAnswerSelect: (answer: string) => void;
}

const answerSchema = z.string().nonempty("Please select an answer.");

const QuestionComponent: FC<QuestionComponentProps> = ({
  question,
  onAnswerSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = answerSchema.safeParse(selectedOption);
    if (!validation.success) {
      setHasError(true);
      return;
    }

    setHasError(false);
    onAnswerSelect(selectedOption);
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
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {hasError && <p className="text-red-600">Please select an answer.</p>}
      <button type="submit" className="btn btn-primary">
        Next
      </button>
    </form>
  );
};

export default QuestionComponent;
