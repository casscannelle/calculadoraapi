import React from "react";
import { Paper, TextField, FormControl, Select } from "@mui/material";

const Calculadora = () => {
    return (
        <div>
            <Paper elevation={3} className="calculadora">
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

export default Calculadora;