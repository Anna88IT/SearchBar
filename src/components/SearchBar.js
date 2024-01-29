import React, {useState} from "react";
import { TextField, Button, Typography, Stack} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {DataList} from "./DataList";
import {useSelector, useDispatch} from "react-redux";
import {searchData} from "../store/dataSlice";

export const SearchBar = () => {
    const data = useSelector((state) => state.data.data);
    const [dataList, setDataList] = useState(data);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchData(searchValue));
        console.log(searchValue)
    }

    return(
        <Stack >
            <Typography mb={2} fontSize = {35}>Search for user</Typography>
            <form>
                <Stack direction="row" gap = {1} justifyContent = 'center'>
                    <TextField
                        placeholder = "Search here"
                        size = "small"
                        value = {searchValue}
                        onChange = {handleChange}
                    >

                    </TextField>
                    <Button
                        variant = "contained"
                        size="small"
                        onClick={handleSubmit}
                    >
                        <SearchIcon />
                    </Button>
                </Stack>
            </form>
            <DataList dataList = {dataList}/>
        </Stack>
    )
}