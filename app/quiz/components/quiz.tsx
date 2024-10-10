// app/quiz/components/quiz.tsx
"use client";

import { FC, useState } from "react";
import { Question } from "../types";
import QuestionComponent from "./question";
import Result from "./result";

interface QuizProps {
  questions: Question[];
}

const Quiz: FC<QuizProps> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelection = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentIndex] = answer;
    setSelectedAnswers(updatedAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isCompleted) {
    return <Result questions={questions} answers={selectedAnswers} />;
  }

  return (
    <QuestionComponent
      question={questions[currentIndex]}
      onAnswerSelect={handleAnswerSelection}
      onPrevious={handlePreviousQuestion}
      selectedOption={selectedAnswers[currentIndex]}
      isFirstQuestion={currentIndex === 0}
    />
  );
};

export default Quiz;
