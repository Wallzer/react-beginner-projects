import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState(''); // исправлено начальное значение на пустую строку
    const [results, setResults] = React.useState(true);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        fetch('https://reqres.in/api/users?page=1', {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        .then(res => res.json())
        .then(json => {
            setUsers(json.data);
        })
        .catch(err => console.warn(err))
        .finally(() => setLoading(false));
    }, []);


    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    return results ? (
  <div className="App">
      <Users items={users}  isLoading={isLoading}
             searchValue={searchValue} onChangeSearchValue={onChangeSearchValue}
                results={results} setResults={setResults}
                count={count} setCount={setCount}/>

  </div>) : (<Success results={results} setResult={setResults} count={count} setCount={setCount} />);}

export default App;