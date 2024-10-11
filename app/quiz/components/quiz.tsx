// app/quiz/components/quiz.tsx
"use client";

import { FC, useState } from "react";
import { Question } from "../types";
import QuestionComponent from "./question";
import Review from "./review";
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
  const [isReviewing, setIsReviewing] = useState(false);

  const handleAnswerSelection = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentIndex] = answer;
    setSelectedAnswers(updatedAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Instead of setting isCompleted, set isReviewing to true
      setIsReviewing(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleGoToQuestion = (index: number) => {
    setCurrentIndex(index);
    setIsReviewing(false);
  };

  const handleReview = () => {
    setIsReviewing(true);
  };

  const handleSubmitQuiz = () => {
    const unanswered = selectedAnswers.some((answer) => answer === "");
    if (unanswered) {
      alert(
        "You have unanswered questions. Please answer all questions before submitting."
      );
      return;
    }
    setIsCompleted(true);
  };

  if (isCompleted) {
    return <Result questions={questions} answers={selectedAnswers} />;
  }

  if (isReviewing) {
    return (
      <Review
        questions={questions}
        answers={selectedAnswers}
        onEditAnswer={handleGoToQuestion}
        onSubmit={handleSubmitQuiz}
      />
    );
  }

  return (
    <QuestionComponent
      question={questions[currentIndex]}
      onAnswerSelect={handleAnswerSelection}
      onPrevious={handlePreviousQuestion}
      selectedOption={selectedAnswers[currentIndex]}
      isFirstQuestion={currentIndex === 0}
      isLastQuestion={currentIndex === questions.length - 1}
      onReview={handleReview}
    />
  );
};

export default Quiz;
