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

const addNote = async (data) => {
  const res = await noteCollection.add(data);
  console.log(res);
  return res;
};

export { getNotes, addNote };
