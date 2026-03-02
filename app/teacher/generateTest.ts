// app/teacher/generateTest.ts
import { Test, Question, Subject } from "../models";

/**
 * Generate a randomized test from a question bank
 * @param title Test title
 * @param subject Subject of the test (must be "Maths" | "Science")
 * @param allQuestions Full list of questions
 * @param count Number of questions to select (default 5)
 * @returns Test object
 */
export function generateTest(
  title: string,
  subject: Subject,
  allQuestions: Question[],
  count: number = 5
): Test {
  // Filter questions by subject
  const filtered = allQuestions.filter((q) => q.subject === subject);

  // Randomize questions
  const shuffled = filtered.sort(() => Math.random() - 0.5);

  // Pick top N questions
  const selected = shuffled.slice(0, count);

  return {
    id: Date.now().toString(),
    title,
    subject,
    questions: selected,
    randomized: true,
    dateCreated: new Date().toISOString(),
  };
}

/**
 * Generate memo (answers + solutions) for a test
 * @param test Test object
 * @returns Array of questions with answer & solution
 */
export function generateMemo(test: Test) {
  return test.questions.map((q) => ({
    question: q.questionText,
    answer: q.answer,
    solution: q.solution,
  }));
}