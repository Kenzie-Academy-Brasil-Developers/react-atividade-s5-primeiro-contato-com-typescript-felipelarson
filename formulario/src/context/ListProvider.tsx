import {createContext, useState, useContext, ReactNode} from 'react'

interface ListProviderProps {
    children: ReactNode;
}

interface Person {
  name: string;
  hobby: string;
  age: string;
}

interface ListProviderData {
    newPerson: Person;
    createNewPerson: (person: Person) => void;
}

const ListContext = createContext<ListProviderData>({} as ListProviderData)

const useList = () =>{
    const context = useContext(ListContext)

    return context;
}

const ListProvider = ({children}: ListProviderProps) =>{

    const [newPerson, setNewPerson] = useState<Person>({} as Person)

    const createNewPerson = (person: Person) => {
        setNewPerson(person)
    }

return(
    <ListContext.Provider value={{
        createNewPerson, newPerson
    }}>
        {children}
    </ListContext.Provider>
)
}

export {ListProvider, useList}