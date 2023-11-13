import { useState } from 'react';
import { checkToken } from "../../utilities/users-service";

export default function AllNotesPage() {
    const [notes, setNotes] = useState([]);    


    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>All Notes Page</h1>
            <>
                {notes.length === 0 ? (
                    <p>No Notes Yet!</p>
                ) : (
                    <>
                        <ul>
                            {notes.map((note) => (
                            <li key={note._id}>{note.text}</li>
                            ))}
                        </ul>
                    </>
                )}
            </>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    );
}