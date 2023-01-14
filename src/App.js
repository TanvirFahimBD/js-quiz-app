import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import QuizSingleAll from "./components/QuizSingleAll";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics />,
        },
        {
          path: "/quiz/:quizId",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId} `
            );
          },
          element: <QuizSingleAll />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
