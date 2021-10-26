import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { useList } from './context/ListProvider';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const {createNewPerson, list, newPerson} = useList()

  const handleSubmit = (name: string, email: string) => {
    const person = {name, email};
    createNewPerson(person)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <hr/>
          <Button onClick={() => handleSubmit(name, email)}>Enviar</Button>
        </Card>

        <ul>
          {list.map((person, idx) => (
            <li key={idx}>{person.name} - {person.email}</li>
          ))}
        </ul>

        <h1>Novo Cadastro</h1>
            <p>
              {newPerson.name} - {newPerson.email}{" "}
            </p>
      </header>
    </div>
  );
}

export default App;
