import { type FormEvent, useRef } from 'react'; 

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void; 
}; 

export default function NewGoal({ onAddGoal }: NewGoalProps) {

    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //One of the ways to get the form data 
        //const data = new FormData(event.currentTarget);

        const goalValue = goalRef.current!.value;
        const summaryValue = summaryRef.current!.value;

        if (goalValue.trim().length === 0 || summaryValue.trim().length === 0) {
            return;
        }

        onAddGoal(goalValue, summaryValue); 

    }

    return (
        <form onSubmit={handleSubmitForm}>
            <p>
                <label htmlFor="goalInput">Your Goal</label>
                <input
                    id="goalInput"
                    type="text"
                    ref={goalRef}
                />
            </p>
            <p>
                <label htmlFor="summaryInput">Goal Summary</label>
                <input
                    id="summaryInput"
                    type="text"
                    ref={summaryRef}
                />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
            
        </form>
    );  
}