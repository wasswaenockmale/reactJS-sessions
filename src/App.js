import Notes from "./components/Notes";

function App(props) {

  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
        <Notes key={note.id} note={note}/>
        )}
      </ul>
    </div>
  );
}

export default App;
