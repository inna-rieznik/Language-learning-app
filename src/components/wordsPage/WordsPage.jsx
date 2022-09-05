import s from "./wordsPage.module.css";
import {NavLink} from "react-router-dom";
import Word from "./words/Word";
//import Button from "../mainPage/vocabulary/action/Button";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const WordsPage = (props) => {
   /* let wordsElement = props.wordsData.map(word => <Word id={word.id} cz={word.cz} eng={word.eng}/>)*/

    return (
        <div className={s.content}>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Home
                    </Link>
                    <Typography color="text.primary">My Words</Typography>
                </Breadcrumbs>
            </div>
            <h1>My Words</h1>
            <Button variant="contained" href='modal_add_word'  startIcon={<AddIcon />} >add new word</Button>
            <Button urlName='modal_add_word' buttonAction='+add new word'/>
            <div>
               {/* {wordsElement}*/}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="left">Word</TableCell>
                                <TableCell align="left">Translation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.wordsData.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.cz}</TableCell>
                                    <TableCell align="left">{row.eng}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}

export default WordsPage;