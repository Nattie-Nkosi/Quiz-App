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
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswers([...selectedAnswers, answer]);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return <Result questions={questions} answers={selectedAnswers} />;
  }

  return (
    <QuestionComponent
      question={questions[currentIndex]}
      onAnswerSelect={handleAnswerSelection}
    />
  );
};

export default Quiz;
