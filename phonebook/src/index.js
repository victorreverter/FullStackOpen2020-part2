import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import Filter from '../src/Filter';
import Form from '../src/Form';
import Persons from '../src/Persons';
import './index.css';

import axios from "axios";

axios.get("http://localhost:3001/persons").then((response) => {
  // const persons = response.data;
  
});

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterArr, setNewFilterArr] = useState([...persons]);

  useEffect(() => {
    console.log('effect');
    axios.get("http://localhost:3001/persons").then(response => {
      console.log('promise fulfilled')
      setPersons(response.data);
      setNewFilterArr(response.data);
    })
  }, [])

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

      <Filter filterHandle={handleFilter} />

      <h2>Add a New</h2>

      <Form
        nameHandle={handleChangeName}
        numberHandle={handleChangeNumber}
        clickHandle={handleClick}
      />

      <h2>Numbers</h2>

      <Persons personsHandled={filterArr} />

      <div>debug: {newName}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// axios.get("http://localhost:3001/persons").then((response) => {
//   // const persons = response.data;  
//   const App = () => {
//     const [persons, setPersons] = useState(response.data);
//     const [newName, setNewName] = useState("");
//     const [newNumber, setNewNumber] = useState("");
//     const [filterArr, setNewFilterArr] = useState([...persons]);
    
//     console.log(persons);
//     // const handlePersons = filterArr.map((item) => {
//     //   return (
//     //     <h4 key={item.name}>
//     //       {item.name} {item.number}
//     //     </h4>
//     //   );
//     // });

//     const handleFilter = (event) => {
//       event.preventDefault();
//       // console.log(event.target.value);
//       // console.log(persons);
//       const filteredRslt = persons.filter((person) => {
//         return person["name"].includes(event.target.value);
//       });

//       setNewFilterArr(filteredRslt);
//       // console.log(filteredRslt);
//     };

//     const handleChangeName = (event) => {
//       // console.log(event.target.value);
//       // event.preventDefault();
//       setNewName(event.target.value);
//     };

//     const handleChangeNumber = (event) => {
//       // console.log(event.target.value);
//       // event.preventDefault();
//       setNewNumber(event.target.value);
//     };

//     const handleClick = (event) => {
//       // console.log(...persons);
//       // console.log([...persons,{name: newName}]);
//       event.preventDefault();
//       if (persons.some((person) => person.name === newName)) {
//         alert(`${newName} is already added to phonebook`);
//       } else {
//         // console.log("didn't exists");
//         document.querySelector("#nameInput").value = "";
//         document.querySelector("#numberInput").value = "";
//         setPersons([...persons, { name: newName, number: newNumber }]);
//         setNewFilterArr([...persons, { name: newName, number: newNumber }]);
//       }
//     };

//     return (
//       <div>
//         <h2>Phonebook</h2>

//         <Filter filterHandle={handleFilter} />

//         <h2>Add a New</h2>

//         <Form
//           nameHandle={handleChangeName}
//           numberHandle={handleChangeNumber}
//           clickHandle={handleClick}
//         />

//         <h2>Numbers</h2>

//         <Persons personsHandled={filterArr} />

//         <div>debug: {newName}</div>
//       </div>
//     );
//   };

//   ReactDOM.render(<App />, document.getElementById("root"));
// });

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: "Arto Hellas", number: "040-123456" },
//     { name: "Ada Lovelace", number: "39-44-5323523" },
//     { name: "Dan Abramov", number: "12-43-234345" },
//     { name: "Mary Poppendieck", number: "39-23-6423122" }
//   ]);
//   const [newName, setNewName] = useState("");
//   const [newNumber, setNewNumber] = useState("");
//   const [filterArr, setNewFilterArr] = useState([...persons]);

//   // const handlePersons = filterArr.map((item) => {
//   //   return (
//   //     <h4 key={item.name}>
//   //       {item.name} {item.number}
//   //     </h4>
//   //   );
//   // });

//   const handleFilter = (event) => {
//     event.preventDefault();
//     // console.log(event.target.value);
//     // console.log(persons);
//     const filteredRslt = persons.filter((person) => {
//       return person["name"].includes(event.target.value);
//     });

//     setNewFilterArr(filteredRslt);
//     // console.log(filteredRslt);
//   };

//   const handleChangeName = (event) => {
//     // console.log(event.target.value);
//     // event.preventDefault();
//     setNewName(event.target.value);
//   };

//   const handleChangeNumber = (event) => {
//     // console.log(event.target.value);
//     // event.preventDefault();
//     setNewNumber(event.target.value);
//   };

//   const handleClick = (event) => {
//     // console.log(...persons);
//     // console.log([...persons,{name: newName}]);
//     event.preventDefault();
//     if (persons.some((person) => person.name === newName)) {
//       alert(`${newName} is already added to phonebook`);
//     } else {
//       // console.log("didn't exists");
//       document.querySelector("#nameInput").value = "";
//       document.querySelector("#numberInput").value = "";
//       setPersons([...persons, { name: newName, number: newNumber }]);
//       setNewFilterArr([...persons, { name: newName, number: newNumber }]);
//     }
//   };

//   return (
//     <div>
//       <h2>Phonebook</h2>

//       <Filter filterHandle={handleFilter} />

//       <h2>Add a New</h2>

//       <Form nameHandle={handleChangeName} numberHandle={handleChangeNumber} clickHandle={handleClick} />

//       <h2>Numbers</h2>

//       <Persons personsHandled={filterArr} />

//       <div>debug: {newName}</div>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
