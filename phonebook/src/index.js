import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterArr, setNewFilterArr] = useState([...persons]);

  const handlePersons = filterArr.map((item) => {
    return (
      <h4 key={item.name}>
        {item.name} {item.number}
      </h4>
    );
  });

  const handleFilter = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    // console.log(persons);
    const filteredRslt = persons.filter((person) => {
      return person["name"].includes(event.target.value);
    });

    setNewFilterArr(filteredRslt);
    // console.log(filteredRslt);
  };

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    // event.preventDefault();
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    // console.log(event.target.value);
    // event.preventDefault();
    setNewNumber(event.target.value);
  };

  const handleClick = (event) => {
    // console.log(...persons);
    // console.log([...persons,{name: newName}]);
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // console.log("didn't exists");
      document.querySelector("#nameInput").value = "";
      document.querySelector("#numberInput").value = "";
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewFilterArr([...persons, { name: newName, number: newNumber }]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>      
      <form>
        <div>
          Filter shown with: <input id="filterInput" onChange={handleFilter} />
        </div>
      </form>

      <h2>Add a New</h2>
      <form>
        <div>
          name: <input id="nameInput" onChange={handleChangeName} />
        </div>
        <div>
          number: <input id="numberInput" onChange={handleChangeNumber} />
        </div>
        <div>
          <button onClick={handleClick} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {handlePersons}

      <div>debug: {newName}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
