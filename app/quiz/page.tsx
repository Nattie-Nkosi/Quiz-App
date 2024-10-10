// app/quiz/page.tsx

import { FC } from "react";
import { getQuestions } from "./utils/get-questions";
import Quiz from "./components/quiz";
import { Question } from "./types";

const QuizPage: FC = async () => {
  const questions: Question[] = await getQuestions();

  if (!questions || questions.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">No Questions Available</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Quiz questions={questions} />
    </div>
  );
};

export default QuizPage;
