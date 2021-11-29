import React, {useEffect, useState} from 'react';
import './App.css';
import Board from "./components/board/board.component";
import axios from 'axios';


const App: React.FC = () => {
    const [headline, setHeadline] = useState('Have fun');
    useEffect(() => {
        axios.get("/api/hello").then(res => setHeadline(res.data.message), err => console.log(err));
        }, []);
    return (
        <div className="App">
            <Board headline={headline}/>
        </div>
    )
}

export default App;
