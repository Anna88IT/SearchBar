import React from "react";
import {Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";

export const DataList = () => {
    const data = useSelector((state) => state.data.data);

    return (
        <Stack mt = {2}>
            { data.length !== 0 &&
                data.map((user) => (
                    <Stack key={user.id} direction="row" gap = {1} justifyContent = "center" >
                        <Typography fontSize = {12}>
                            {user.id}
                        </Typography>
                        <Typography fontSize = {12}>
                            {user.name}
                        </Typography>
                        <Typography fontSize = {12}>
                            {user.email}
                        </Typography>

                    </Stack>
                ))

            }
        </Stack>

    )
}