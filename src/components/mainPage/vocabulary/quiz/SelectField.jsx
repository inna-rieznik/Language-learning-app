import * as React from "react";
import Box from "@mui/material/Box";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const SelectField = (props) => {

    const {label} = props;
    const [value, setValue] = useState("");

    const handleChange = () => { }

    return (
        <Box>
            <FormControl mr={20} fullWidth={true}>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectField;