import { db, timestamp } from './firebase';

const noteCollection = db.collection('notes');

// Grab all notes from firebase
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

// Add note to firebase
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

export { getNotes, addNote };
