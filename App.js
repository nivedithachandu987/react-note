import React, { useState } from 'react';
import './index.css';

function App() {
    const [notes, setNotes] = useState([
        { id: 1, title: "Note 1", content: "This is the content for note 1" },
        { id: 2, title: "Note 2", content: "This is the content for note 2" },
        { id: 3, title: "Note 3", content: "This is the content for note 3" },
        { id: 4, title: "Note 4", content: "This is the content for note 4" },
        { id: 5, title: "Note 5", content: "This is the content for note 5" },
        { id: 6, title: "Note 6", content: "This is the content for note 6" },
    ]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const addNote = () => {
        if (title.trim() && content.trim()) {  // Ensure both title and content are not empty
            const newNote = {
                id: notes.length + 1,
                title: title,
                content: content,
            };
            setNotes([...notes, newNote]);
            setTitle("");  // Clear the title input after adding the note
            setContent(""); // Clear the content input after adding the note
        }
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="p-4">
            <div className="flex flex-col w-1/4 p-4 bg-gray-200 rounded-lg">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mb-2 p-2 border rounded"
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mb-2 p-2 border rounded h-32"
                />
                <button
                    onClick={addNote}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Add Note
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {notes.map(note => (
                    <div key={note.id} className="relative p-4 bg-gray-100 border rounded-lg">
                        <button
                            onClick={() => deleteNote(note.id)}
                            className="absolute top-2 right-2 text-gray-500"
                        >
                            x
                        </button>
                        <h2 className="font-bold">{note.title}</h2>
                        <p>{note.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
