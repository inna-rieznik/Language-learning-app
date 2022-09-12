import * as React from "react";
import Box from "@mui/material/Box";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const SelectField = (props) => {

    const {label, options} = props;
    const [value, setValue] = useState("");

    const handleChange = () => { }

    return (
        <Box mt={3} width="100%">
            <FormControl size="small" fullWidth={true}>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                  {/*  {options.map(({id, name}) => (
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                        ))}*/}

                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectField;