import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg';
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalType = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  // type never[] is an array of unknown type
  const [courseGoals, setCourseGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal(goalTitle: string, goalDescription: string) {
    setCourseGoals((prevCourseGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goalTitle,
        description: goalDescription,
      };
      return [...prevCourseGoals, newGoal];
    });
  }

  function handleDeleteGoal(goalId: number) {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.filter(goal => goal.id !== goalId);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList
        courseGoals={courseGoals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  );
}
