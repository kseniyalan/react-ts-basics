// It is a good practice to use the type keyword when type is imported, to avoid confusion with the React components
import { type PropsWithChildren } from 'react';

/*
// This is one way to define the types for the props with children
interface CourseGoalProps {
    title: string;
    children: ReactNode;
}
*/

/*
// This is another way to define the types for the props
// No matter which way to use, the result is the same
type CourseGoalProps = {
    title: string;
    description: string;
};
*/

// This is another way to define the types for the props with children
// No matter which way to use, the result is the same
// So, you can either use the interface or the type keyword,
// declare the props directly with ReactNode type or use PropsWithChildren type

//The KEY prop can be set on custom components even if you didn't specify it in your props type!
//This is because React automatically adds the key prop to all components that are part of a list.

// The PropsWithChildren type is a generic type that allows you to define a component's props with children.
type CourseGoalProps = PropsWithChildren<{
    id: number; 
    title: string;
    onDelete: (goalId: number) => void;
}>;


// One way to write a functional component
export default function CourseGoal({ id, title, onDelete, children }: CourseGoalProps) { 
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button
                type="button"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </article>
    );
}

/*
// The second way to write a functional component
// The FC type is a generic type that allows you to define a functional component.
const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button type="button">Delete</button>
        </article>
    );
};

export default CourseGoal;
*/