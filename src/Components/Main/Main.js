import React from "react";
import { Paper, TextField, FormControl, Select } from "@mui/material";

const Main = () => {
    return (
        <div>
            <Paper>
                <h3>Converta valores</h3>
            <div>
                <TextField variant="outlined" />
                <FormControl variant="outlined">
                <Select native>
                    <option value="">Moeda</option>
                </Select>
                </FormControl>
            </div>
            <div>
                <TextField variant="outlined" />
                <FormControl variant="outlined">
                <Select native>
                    <option value="">Moeda</option>
                </Select>
                </FormControl>
            </div>
            </Paper>
        </div>
    )
};

export default Main;