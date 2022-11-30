import s from "./wordsPage.module.css";
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
import {addWordToVocabularyActionCreator, updateNewWordTextActionCreator} from "../redux/WordsReducer";
import {useEffect, useState} from 'react';
import axios from "axios";
import Axios from "axios";
import {useAuth} from "../login/Auth";

const btnStyle = {
    marginBottom : 20
};

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

const WordsPage = (props) => {

    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");

    const [listOfWords, setListOfWords] = useState();

    useEffect(() => {
        axios.get("http://localhost:3011/words",
            ).then((response) => {
            setListOfWords(response.data);
            console.log(response.data);
        });
    }, []);

    const addWord = () => {
        Axios.post('http://localhost:3011/words', {
            source: source,
            target: target
        }).then((response) => {
            console.log(response.data);
        });
    };



    //function to add data from inputs to wordsData
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //function to add data from inputs to wordsData
    let newWordCz = React.createRef();
    let newWordEng = React.createRef();

    let addWordToVocabulary = () => {
        /*let word = newWordCz.current.value;
        let translate = newWordEng.current.value;*/
        /*props.addWordToVocabulary(word, translate);*/
        let action = addWordToVocabularyActionCreator()
        props.dispatch(action);
        //props.updateNewWordText('','');


    };

    let updateNewWordText = () => {
        let word = newWordCz.current.value;
        let translation = newWordEng.current.value;
        let action = updateNewWordTextActionCreator(word, translation);
        props.dispatch(action);
    }

    return (
        <div className={s.content}>
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
            <h1>My Words</h1>
            <Button style={btnStyle} onClick={handleOpen} variant="contained" startIcon={<AddIcon/>}>add new word</Button>
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
                            <TextField id="outlined-basic"
                                       label="Type word in czech"
                                       variant="outlined"
                                       inputRef={newWordCz}
                                       onChange={(e) => {
                                           setSource(e.target.value);
                                       }}
                                     /*  value={props.wordsData.newWordText}*//>
                            <Typography id="transition-modal-title">
                                Translation
                            </Typography>
                            <TextField id="outlined-basic"
                                       label="Type word in eng"
                                       variant="outlined"
                                       inputRef={newWordEng}
                                       onChange={(e) => {
                                           setTarget(e.target.value);
                                       }}

                                      /* value={props.wordsData.newTranslationText}*//>
                            <Button variant="contained"
                                    startIcon={<AddIcon/>}
                                    onClick={() => {
                                        addWord();
                                        handleClose();
                                    }}>add</Button>
                        </Box>

                    </Box>
                </Fade>
            </Modal>


            <div>
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
                            {listOfWords?.map((row) => (
                                <TableRow
                                    key={row.id_word}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id_word}
                                    </TableCell>
                                    <TableCell align="left">{row.source}</TableCell>
                                    <TableCell align="left">{row.target}</TableCell>
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