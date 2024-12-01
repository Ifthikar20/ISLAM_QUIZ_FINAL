"use client";

import React, { useEffect, useState } from "react";

interface Question {
  _id: string;
  question: string;
  options: string[];
  answer: string;
  hint: string;
  reference: string;
}

interface QuizComponentProps {
  quizType: "before-seerah" | "after-seerah";
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quizType }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ questionId: string; userAnswer: string; correctAnswer: string; reference: string }[]>([]);

  const categoryMap = {
    "before-seerah": "se-bh",
    "after-seerah": "se-ah",
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/api/questions/${categoryMap[quizType]}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [quizType]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30); // Reset the timer
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerClick = (selectedOption: string) => {
    const currentQ = questions[currentQuestion];
    const isCorrect = selectedOption === currentQ.answer;

    // Update userAnswers
    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQ._id,
        userAnswer: selectedOption,
        correctAnswer: currentQ.answer,
        reference: currentQ.reference,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    handleNextQuestion();
  };

  const getCongratulatoryMessage = () => {
    const totalQuestions = questions.length;
    if (score === totalQuestions) {
      return "MashaAllah! You got a perfect score! Excellent work.";
    } else if (score >= totalQuestions * 0.7) {
      return "Mashallah! You did really well. Keep it up!";
    } else if (score >= totalQuestions * 0.4) {
      return "Good effort! Keep learning and improving.";
    } else {
      return "Don't give up! Keep studying and try again.";
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">Loading Questions...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">Error: {error}</h1>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">No Questions Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {quizType === "before-seerah" ? "Seerah Before Hijrah Quiz" : "Seerah After Hijrah Quiz"}
      </h1>
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Your Score: {score}/{questions.length}
          </h2>
          <p className="mt-4">{getCongratulatoryMessage()}</p>
          <div className="space-y-6 mt-6">
            {userAnswers.map((answer, index) => (
              <div key={answer.questionId} className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">
                  Q{index + 1}: {questions[index].question}
                </h3>
                <p>
                  <strong>Your Answer:</strong> {answer.userAnswer}
                </p>
                <p>
                  <strong>Correct Answer:</strong> {answer.correctAnswer}
                </p>
                <p>
                  <strong>Reference:</strong> {answer.reference}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="text-right text-gray-700 mb-4">
            Time Left: <span className="font-bold">{timeLeft}s</span>
          </div>
          <h2 className="text-xl mb-4">
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
          <div className="flex flex-col space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <details className="cursor-pointer">
              <summary className="text-blue-600 underline hover:text-blue-400">
                Show Hint
              </summary>
              <p className="mt-2 text-sm text-gray-500">
                {questions[currentQuestion].hint}
              </p>
            </details>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
