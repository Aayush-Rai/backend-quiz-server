import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const quizData = [
  {
    id: 1,
    title: "What is the full form of WWW?",
    correctOptionId: "opt-4",
    options: [
      { id: "opt-1", text: "World Wide World" },
      { id: "opt-2", text: "World Web Wide" },
      { id: "opt-3", text: "Wide Web World" },
      { id: "opt-4", text: "World Wide Web" },
    ],
  },
];

app.get("/api/v1/quiz", (req, res) => {
  res.json({
    status: "success",
    data: {
      questions: quizData.map(({ correctOptionId, ...rest }) => rest),
    },
  });
});

app.post("/api/v1/quiz/submit", (req, res) => {
  const { questionId, selectedOptionId } = req.body;
  const question = quizData.find((q) => q.id === questionId);

  if (!question) {
    return res
      .status(404)
      .json({ status: "fail", message: "Question not found" });
  }

  const isCorrect = question.correctOptionId === selectedOptionId;
  res.json({ status: "success", result: isCorrect ? "correct" : "incorrect" });
});

app.listen(4100, () => {
  console.log("📚 Quiz backend running at http://localhost:4100");
});
