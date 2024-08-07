import { useState } from "react";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg';

type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  // type never[] is an array of unknown type
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setCourseGoals((prevCourseGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React with TS',
        description: 'Learn it from the very ground up!',
      };
      return [...prevCourseGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {courseGoals.map((goal) => (
          <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
