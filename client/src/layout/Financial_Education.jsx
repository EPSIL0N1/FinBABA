'use client';

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { ScrollArea } from "../components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { BookOpen, Award, HelpCircle } from 'lucide-react';
import "./css_files/ey_features_font_edit.css"

export default function Financial_Education() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizResult, setQuizResult] = useState(null);

  const articles = [
    { title: "Introduction to Personal Finance", level: 1 },
    { title: "Budgeting Basics", level: 1 },
    { title: "Understanding Credit Scores", level: 2 },
    { title: "Investing for Beginners", level: 2 },
    { title: "Retirement Planning Essentials", level: 3 },
    { title: "Tax Strategies for Individuals", level: 3 },
  ];

  const quiz = {
    question: "What is the primary purpose of a budget?",
    options: [
      "To restrict spending",
      "To track income and expenses",
      "To increase debt",
      "To avoid financial planning",
    ],
    correctAnswer: "To track income and expenses",
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer === quiz.correctAnswer) {
      setQuizResult("Correct! Great job!");
      setCurrentLevel((prev) => Math.min(prev + 1, 3));
    } else {
      setQuizResult("Incorrect. Try again!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 ey_title_font_color_and_family">Finance Education Center</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 ey_desription_font_color_and_family">
          <CardHeader>
            <CardTitle>Articles</CardTitle>
            <CardDescription>Expand your financial knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {articles.map((article, index) => (
                <div key={index} className="flex items-center space-x-2 mb-4">
                  <BookOpen className="h-5 w-5" />
                  <span className="flex-grow">{article.title}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      article.level <= currentLevel
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Level {article.level}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Keep learning to level up!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 ey_desription_font_color_and_family">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Current Level: {currentLevel}</span>
              </div>
              <Progress value={(currentLevel / 3) * 100} className="w-full" />
              <Button onClick={() => setShowQuiz(true)} className="w-full">
                Take Pop Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {showQuiz && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Pop Quiz</CardTitle>
            <CardDescription>Test your knowledge!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="font-semibold">{quiz.question}</p>
              <RadioGroup
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              >
                {quiz.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button onClick={handleQuizSubmit} className="w-full">
                Submit Answer
              </Button>
              {quizResult && (
                <p
                  className={
                    quizResult.startsWith('Correct')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {quizResult}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-6 text-center text-sm text-gray-500">
        <HelpCircle className="inline h-4 w-4 mr-1" />
        Need help? Contact our support team for assistance.
      </div>
    </div>
  );
}
