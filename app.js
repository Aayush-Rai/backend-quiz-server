import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/v1/quiz", (req, res) => {
    setTimeout(() => {
        res.json({
            status: "success",
            data: {
                questions: [
                    {
                        id: 1,
                        title: "What is the full form of WWW?",
                        options: [
                            {
                                id: "opt-1",
                                text: "World Wide World",
                            },
                            {
                                id: "opt-2",
                                text: "World Web Wide",
                            },
                            {
                                id: "opt-3",
                                text: "Wide Web World",
                            },
                            {
                                id: "opt-4",
                                text: "World Wide Web",
                            },
                        ],
                    },
                ],
            },
        });
    }, 2000);
});

app.listen(4100, () => {
    console.log("---------------- Server started --------------");
});
