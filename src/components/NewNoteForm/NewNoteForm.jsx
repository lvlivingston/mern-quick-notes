import { useState } from 'react';

export default function NewNoteForm({ notes, user, setNotes }) {
    const [newNote, setNewNote] = useState({});

    const handleChange = (e) => {
        setNewNote({text: e.target.value, user: user._id})
    }; 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNoteResponse = await fetch('http://localhost:3000/api/notes', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newNote) 
        });
        const newNoteValue = await newNoteResponse.json();
        console.log(newNoteValue);
        setNotes([...notes, newNoteValue]);
        // here we'd navigate to all notes instead of the setNotes function & add a useEffect on the App.jsx that calls the backend with all the notes
    };

    return (
      <div>
        <form>
            <textarea onChange={handleChange} />
            <button onClick={handleSubmit}>Add Note</button>
        </form>
      </div>
    );
};

