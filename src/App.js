import './App.css';
import React, {useEffect, useState} from "react";
import {SearchBar} from "./components/SearchBar";
import {setData} from "./store/dataSlice";
import {useDispatch} from "react-redux";

function App() {
    const [dataList, setDataList] = useState([]);
    const dispatch = useDispatch();

    async function getData() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => data);

        setDataList(data);

    }

    useEffect(() => {
        getData();
        dispatch(setData(dataList));
    }, [dataList, dispatch]);

  return (
    <div className="App">
        <SearchBar/>
    </div>
  );
}

export default App;
