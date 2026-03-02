// app/sampleQuestions.ts
import { Question } from "./models";

export const questions: Question[] = [
  {
    id: "q1",
    subject: "Maths",
    topic: "Algebra",
    type: "MCQ",
    questionText: "Solve for x: 2x + 5 = 15",
    options: ["5", "10", "7", "20"],
    answer: "5",
    solution: "2x + 5 = 15 → 2x = 10 → x = 5",
    formulaRef: "Linear equations: y = mx + c",
  },
  {
    id: "q2",
    subject: "Maths",
    topic: "Algebra",
    type: "StepByStep",
    questionText: "Factorize x² + 5x + 6",
    answer: "(x + 2)(x + 3)",
    solution: "Find factors of 6 that sum to 5 → 2 and 3 → (x+2)(x+3)",
    formulaRef: "Quadratic factorization",
  },
  {
    id: "q3",
    subject: "Science",
    topic: "Physics",
    type: "Practical",
    questionText: "Design an experiment to measure acceleration due to gravity",
    answer: "Use a pendulum or free fall method...",
    solution: "Step 1: Measure length l...\nStep 2: Measure period T...",
  },
  {
    id: "q4",
    subject: "Science",
    topic: "Graphs",
    type: "Graph",
    questionText: "Interpret the following velocity-time graph",
    answer: "Acceleration = slope of graph",
    solution: "Slope = Δv/Δt = a",
  },
];