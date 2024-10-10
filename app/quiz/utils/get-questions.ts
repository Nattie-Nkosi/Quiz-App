// app/quiz/utils/get-questions.ts

import { Question } from '../types';

export async function getQuestions(): Promise<Question[]> {
  // Fetch questions from a database or external API
  // For demonstration, returning static data

  const questions: Question[] = [
    {
      id: '1',
      question: 'What is the purpose of the OSI model in networking?',
      options: [
        'Defines standards for network hardware manufacturers',
        'Facilitates communication between different network protocols',
        'Provides a framework for network communication',
        'Enhances the speed of network connections',
      ],
      correctAnswer: 'Provides a framework for network communication',
    },
    // Add more questions as needed
  ];

  return questions;
}
