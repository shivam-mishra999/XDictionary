import React, {useState} from 'react';
import styles from './Dictionary.module.css';


const dictionaryWords =[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];


export default function Dictionary() {
    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState(null);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = () => {
        const foundWord = dictionaryWords.find((obj) =>(
         obj.word.toLowerCase() === searchTerm.toLowerCase()
        ))
        if(foundWord){
            setResult(foundWord.meaning);
        }else{
            setResult("Word not found in the dictionary.")
        }
    }

  return (
    <div className={styles.container}>
        <h1>Dictionary App</h1>
        <div className={styles.search}>

            <input 
            type="text" 
            placeholder="Search for a word..." 
            value={searchTerm}
            onChange={handleChange}
            />

            <button onClick={handleSearch}>Search</button>
        </div>
        <h3>Definition:</h3>

        {result && <p>{result}</p>}

    </div>
  )
}
