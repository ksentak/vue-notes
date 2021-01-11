import { db, timestamp } from './firebase';

const noteCollection = db.collection('notes');

// Create a note
const addNote = async (data) => {
  const allData = {
    timestamp: timestamp,
    ...data
  };
  const newNote = await noteCollection.add(allData);
  return {
    id: newNote.id,
    ...data
  };
};

// Read all notes
const getNotes = async () => {
  const snapshot = await noteCollection.orderBy('timestamp', 'desc').get();
  return snapshot.docs.map((doc) => {
    const { title, content, color } = doc.data();
    return {
      id: doc.id,
      title,
      content,
      color
    };
  });
};

// Update a note
const updateNote = async (note) => {
  await noteCollection.doc(note.id).update({
    title: note.title,
    content: note.content,
    color: note.color,
    timestamp: timestamp
  });
  return note;
};

// Delete note
const deleteNote = async (id) => {
  await noteCollection.doc(id).delete();
  return id;
};

export { addNote, getNotes, updateNote, deleteNote };
