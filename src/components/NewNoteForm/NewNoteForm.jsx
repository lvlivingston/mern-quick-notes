import { useState } from 'react';

export default function NewNoteForm({ user }) {
    const [newNote, setNewNote] = useState({});

    const handleChange = (e) => {
        setNewNote({text: e.target.value, user: user._id})
    }; 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        return fetch('http://localhost:3000/api/notes', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newNote) 
        });
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

