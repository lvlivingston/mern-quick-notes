import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotePage({ notes, user }) {  
    
    const handleAddNote = (newNote) => {
        console.log('Added note:', newNote);
    };

    return (
        <div>
            <h1>New Note Page</h1>
            <NewNoteForm onAddNote={handleAddNote} notes={ notes } user={ user }/>
        </div>
    );
}