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
import {useEffect, useState} from 'react';
import axios from "axios";
import {useAuth} from "../login/Auth";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: '#FFC2C2',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px'

};

let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
);


const WordsPage = (props) => {

    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");
    const [user, setUser] = useState({})
    const {userId} = useAuth();

    const [listOfWords, setListOfWords] = useState();

    useEffect(() => {
        reqInstance.get("http://localhost:3011/words",
        ).then((response) => {
            setListOfWords(response.data);
           // console.log(response.data);
        });
    }, []);

/*    useEffect(() => {
        reqInstance.get(`http://localhost:3011/user/${userId}`).then((response) => {
            setUser(response.data[0]);
            console.log("user data", response.data[0]);
        });
    }, [userId]);*/


    const addWord = () => {
        reqInstance.post('http://localhost:3011/words', {
            source: source,
            target: target
        }).then((response) => {
            const wordToAdd = {source: source, target: target}
            setListOfWords([...listOfWords, wordToAdd]);
            console.log("list:", listOfWords);

        });
    };


    //function to add data from inputs to wordsData
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //function to add data from inputs to wordsData
    let newWordCz = React.createRef();
    let newWordEng = React.createRef();

    /* let addWordToVocabulary = () => {
         /!*let word = newWordCz.current.value;
         let translate = newWordEng.current.value;*!/
         /!*props.addWordToVocabulary(word, translate);*!/
         let action = addWordToVocabularyActionCreator()
         props.dispatch(action);
         //props.updateNewWordText('','');


     };*/

    /* let updateNewWordText = () => {
         let word = newWordCz.current.value;
         let translation = newWordEng.current.value;
         let action = updateNewWordTextActionCreator(word, translation);
         props.dispatch(action);
     }*/

    return (
        <div className={s.content}>
            <div style={{ width: "800px", margin: "20px auto 20px auto"}}>
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
                <h1 style={{marginTop: "20px"}}>My Words</h1>
                {(user.role === 'student') ? null :
                    <Button style={{backgroundColor: "#FF777B", width: "400px", height: "50px", marginBottom: 20}}
                            onClick={handleOpen} variant="contained" startIcon={<AddIcon/>}>add new
                        word</Button>
                }
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
                            <h2 id="transition-modal-title">
                                Add new word
                            </h2>
                            <Box component="form"
                                 sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                                 noValidate
                                 autoComplete="off">
                                <h3 id="transition-modal-title">
                                    Word
                                </h3>
                                <TextField id="outlined-basic"
                                           label="Type word in czech"
                                           variant="outlined"
                                           inputRef={newWordCz}
                                           onChange={(e) => {
                                               setSource(e.target.value);
                                           }}
                                           style={{width: "500px"}}
                                    /*  value={props.wordsData.newWordText}*//>
                                <h3 id="transition-modal-title">
                                    Translation
                                </h3>
                                <TextField id="outlined-basic"
                                           label="Type word in eng"
                                           variant="outlined"
                                           inputRef={newWordEng}
                                           onChange={(e) => {
                                               setTarget(e.target.value);
                                           }}
                                           style={{width: "500px"}}

                                    /* value={props.wordsData.newTranslationText}*//>

                                <Button variant="contained"
                                        startIcon={<AddIcon/>}
                                        onClick={() => {
                                            addWord();
                                            handleClose();
                                        }}
                                        style={{width: "500px", marginTop: "20px"}}
                                >add</Button>

                            </Box>

                        </Box>
                    </Fade>
                </Modal>


                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{backgroundColor: "rgba(255, 194, 194, 0.5)"}}>
                                    <TableCell style={{fontWeight: " 900", color: "#003066"}}>Id</TableCell>
                                    <TableCell style={{fontWeight: " 900", color: "#003066"}}
                                               align="left">Word</TableCell>
                                    <TableCell style={{fontWeight: " 900", color: "#003066"}}
                                               align="left">Translation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listOfWords?.map((row) => (
                                    <TableRow style={{backgroundColor: "rgba(255, 194, 194, 0.2)"}}
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
        </div>
    );
}

export default WordsPage;