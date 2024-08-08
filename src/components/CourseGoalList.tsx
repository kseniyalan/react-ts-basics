import CourseGoal from "./CourseGoal.tsx";
import {type CourseGoalType } from "../App.tsx";   

type CourseGoalListProps = {
    courseGoals: CourseGoalType[];
    onDeleteGoal: (goalId: number) => void;
};

export default function CourseGoalList({ courseGoals, onDeleteGoal }: CourseGoalListProps) {
    return (
        <ul>
            {courseGoals.map((goal) => (
                <li key={goal.id}>
                <CourseGoal
                    id={goal.id}
                    title={goal.title}
                    onDelete={onDeleteGoal}
                >
                    <p>{goal.description}</p>
                </CourseGoal>
                </li>
            ))}
        </ul>
    );

}