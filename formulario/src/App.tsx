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

  const {createNewPerson, newPerson} = useList()

  const handleSubmit = (name: string, hobby: string, age: string) => {
    const person = {name, hobby, age};
    createNewPerson(person)
  }

  return (
    <div className="App">
      <header className="App-header">
        {(newPerson.name !== undefined) &&   <h1>{newPerson.name}</h1>}
        <Card title={"Formulário"}>
          <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} />
          <Input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <hr/>
          <Button onClick={() => handleSubmit(name, hobby, age)}>Enviar</Button>
        </Card>

        <hr/>
        <span style={{height: "200px"}}>
          {(newPerson.name !== undefined) && 
            <p>
              {newPerson.name} - {newPerson.hobby} - {newPerson.age}{" "}
            </p>
            }
        </span>
      </header>
    </div>
  );
}

export default App;
