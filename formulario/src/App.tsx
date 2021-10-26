import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { useList } from './context/ListProvider';

function App() {

  const [name, setName] = useState("")
  const [hobby, setHobby] = useState("")
  const [age, setAge] = useState("")

  const {createNewPerson, list, newPerson} = useList()

  const handleSubmit = (name: string, hobby: string, age: string) => {
    const person = {name, hobby, age};
    createNewPerson(person)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulário</h1>
        <Card>
          <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} />
          <Input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <hr/>
          <Button onClick={() => handleSubmit(name, hobby, age)}>Enviar</Button>
        </Card>

        <ul>
          {list.map((person, idx) => (
            <li key={idx}>{person.name} - {person.hobby} - {person.age}</li>
          ))}
        </ul>

        {/* <h1>Novo Cadastro</h1>
            <p>
              {newPerson.name} - {newPerson.email}{" "}
            </p> */}
      </header>
    </div>
  );
}

export default App;
