import { type FormEvent } from 'react';  

export default function NewGoal() {

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //One of the ways to get the form data 
        //const data = new FormData(event.currentTarget);

    }

    return (
        <form onSubmit={handleSubmitForm}>
            <p>
                <label htmlFor="goalInput">Your Goal</label>
                <input
                    id="goalInput"
                    type="text"
                    name="goal"
                />
            </p>
            <p>
                <label htmlFor="descriptionInput">Goal Description</label>
                <input
                    id="descriptionInput"
                    type="text"
                    name="description"
                />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
            
        </form>
    );  
}