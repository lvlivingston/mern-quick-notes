import { useState } from 'react';

export default function NewNoteForm({ onAddNote, user }) {
    const [newNote, setNewNote] = useState('');
  
    const handleAddNote = () => {
      onAddNote(newNote);
      setNewNote('');
    };
  
    return (
      <div>
        <textarea value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    );
};

