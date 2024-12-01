"use client";

import React from "react";
import { usePathname } from "next/navigation";
import QuizComponent from "@/components/QuizComponent";

const QuizPage = () => {
  const pathname = usePathname();

  // Extract quiz type from the URL
  const quizType = pathname.split("/")[2]; // "before-seerah" or "after-seerah"

  // Validate quiz type and map to a title
  const validQuizzes = {
    "before-seerah": "Before Hijrah Quiz",
    "after-seerah": "After Hijra Quiz",
  };

  // Check if quiz type is valid
  if (!Object.keys(validQuizzes).includes(quizType)) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">404 - Quiz Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Render the quiz component dynamically */}
      <QuizComponent quizType={quizType as "before-seerah" | "after-seerah"} />
    </div>
  );
};

export default QuizPage;
