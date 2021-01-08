import db from './firebase';

const noteCollection = db.collection('notes');

const getNotes = async () => {
  const snapshot = await noteCollection.get();
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

export { getNotes };
