import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNotePage from '../NewNotePage/NewNotePage';
import AllNotesPage from '../AllNotesPage/AllNotesPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);   
  
  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={ user } setUser={ setUser }/>
        <Routes>
          <Route path="/notes/new" element={ <NewNotePage user={ user } setNotes={ setNotes } notes={ notes }/> } />
          <Route path="/notes" element={ <AllNotesPage notes={ notes } /> } />
        </Routes>
      </>
      :
      <AuthPage setUser={ setUser } />
    }
    </main>
  );
}
