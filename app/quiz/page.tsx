// app/quiz/page.tsx

import { FC } from "react";
import fs from "fs/promises";
import Quiz from "./components/quiz";
import { Question } from "./types";
import path from "path";

export async function getQuestionsFromFile(): Promise<Question[]> {
  const filePath = path.join(process.cwd(), "data", "questions.json");
  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    const questions: Question[] = JSON.parse(jsonData);
    return questions;
  } catch (error) {
    console.error("Error reading questions:", error);
    return [];
  }
}

const QuizPage: FC = async () => {
  const questions: Question[] = await getQuestionsFromFile();
  // If there are no questions, display a message
  if (!questions || questions.length === 0) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold">No Questions Available</h1>
      </div>
    );
  }
  // Otherwise, display the quiz
  // How to increase the max-width of the quiz container?
  return (
    <div className="p-1 max-w-xl mx-auto">
      <Quiz questions={questions} />
    </div>
  );
};

export default QuizPage;
