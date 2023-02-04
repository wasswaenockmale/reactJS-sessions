function App(props) {

  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(elem => <li>{elem.content}</li>)}
      </ul>
    </div>
  );
}

export default App;
