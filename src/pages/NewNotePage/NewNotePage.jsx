import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotePage({ user }) {
    
    const handleAddNote = (newNote) => {
        console.log('Added note:', newNote);
    };

    return (
        <div>
            <h1>New Note Page</h1>
            <NewNoteForm onAddNote={handleAddNote} user={ user }/>
        </div>
    );
}