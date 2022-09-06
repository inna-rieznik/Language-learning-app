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
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import {addWordToVocabulary} from "../redux/state";
import * as props from "../redux/state";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function handleClick(event) {
    event.preventDefault();
    //console.info('You clicked a breadcrumb.');
}

const WordsPage = (props) => {
    /* let wordsElement = props.wordsData.map(word => <Word id={word.id} cz={word.cz} eng={word.eng}/>)*/

    //function to add data from inputs to wordsData
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //function to add data from inputs to wordsData
    let newWordCz = React.createRef();
    let newWordEng = React.createRef();

    let addWordToVocabulary = () => {
        let word = newWordCz.current.value;
        let translate = newWordEng.current.value;
        props.addWordToVocabulary(word, translate);
        newWordCz.current.value = null;
        newWordEng.current.value = null;

    };

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
            <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon/>}>add new word</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Add new word
                        </Typography>
                        <Box component="form"
                             sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                             noValidate
                             autoComplete="off">
                            <Typography id="transition-modal-title">
                                Word
                            </Typography>
                            <TextField id="outlined-basic" label="Type smth" variant="outlined" inputRef={newWordCz}/>
                            <Typography id="transition-modal-title">
                                Translation
                            </Typography>
                            <TextField id="outlined-basic" label="Type smth" variant="outlined" inputRef={newWordEng}/>
                            <Button variant="contained" startIcon={<AddIcon/>}
                                    onClick={addWordToVocabulary}>add</Button>
                        </Box>

                    </Box>
                </Fade>
            </Modal>


            <div>
                {/* {wordsElement}*/}
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
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
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
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