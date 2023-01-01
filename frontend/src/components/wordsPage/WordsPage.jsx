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
import {Dialog, IconButton} from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import {useParams} from "react-router-dom";
import {reqInstance} from '../../utils/auth'
import {API_URL} from "../../utils/url";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px'

};


const WordsPage = (props) => {

    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");
    const [user, setUser] = useState({})
    const {userId} = useAuth();
    //let {wordId} = useParams();

    const [listOfWords, setListOfWords] = useState();
    const [wordsCount, setWordsCount] = useState();

    //function to add data from inputs to wordsData
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(true);

    let newWordCz = React.createRef();
    let newWordEng = React.createRef();


    useEffect(() => {
        reqInstance.get(`${API_URL}/user/${userId}`)
            .then((response) => {
                setUser(response.data[0]);
                // console.log("user data", response.data[0]);
            });
    }, [userId]);

    // console.log("role", user.role);


    useEffect(() => {
        {
            (user.role === 'student') ?
                reqInstance.get(`${API_URL}/words/forStudent`)
                    .then((response) => {
                        setListOfWords(response.data);
                        setWordsCount(response.data.length);
                        // console.log(response.data);
                    })
                :
                reqInstance.get(`${API_URL}/words/all`)
                    .then((response) => {
                        setListOfWords(response.data);
                        setWordsCount(response.data.length);
                        // console.log(response.data);
                    })
        }

    }, [user.role]);

    const deleteWord = (wordId) => {
        reqInstance.delete(`${API_URL}/words/${wordId}`).then((response) => {
            setWordsCount(listOfWords.length - 1);
            setListOfWords(listOfWords.filter((data) => data.id_word !== wordId))
        });
    };

    const editWord = (wordId) => {

        const source = prompt("Enter New Word: ");
        const target = prompt("Enter New Translation: ");
        reqInstance.put(`${API_URL}/words/${wordId}`, {
            source: source,
            target: target
        }).then((response) => {
            setListOfWords(listOfWords);
            console.log(response.data);
        });

    }


    const addWordAsStudent = () => {
        reqInstance.post(`${API_URL}/words/byStudent`, {
            source: source,
            target: target
        }).then((response) => {
            const wordToAdd = {source: source, target: target}
            setListOfWords([...listOfWords, wordToAdd]);
            setWordsCount(listOfWords.length + 1)
            console.log("list:", listOfWords);

        });
    };

    const addWordAsAdmin = () => {
        reqInstance.post(`${API_URL}/words/byAdmin`, {
            source: source,
            target: target
        }).then((response) => {
            const wordToAdd = {source: source, target: target}
            setListOfWords([...listOfWords, wordToAdd]);
            setWordsCount(listOfWords.length + 1)
        });
    };


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
            <div style={{width: "800px", margin: "20px auto 20px auto"}}>
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
                {/* {(user.role === 'student') ? null :*/}
                <Button style={{backgroundColor: "#FF777B", width: "400px", height: "50px", marginBottom: 20}}
                        onClick={handleOpenAdd} variant="contained" startIcon={<AddIcon/>}>add new
                    word</Button>
                {/* }  */}
                <Modal
                    open={openAdd}
                    onClose={handleCloseAdd}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h4" component="h1">
                            Add new word
                        </Typography>
                        <h3>
                            Word
                        </h3>
                        <TextField
                            sx={{paddingBottom: 2}}
                            fullWidth
                            id="outlined-basic"
                            label="Type word in czech"
                            variant="outlined"
                            inputRef={newWordCz}
                            onChange={(e) => {
                                setSource(e.target.value);
                            }}
                        />
                        <h3>
                            Translation
                        </h3>
                        <TextField
                            sx={{paddingBottom: 2}}
                            fullWidth
                            id="outlined-basic"
                            label="Type word in eng"
                            variant="outlined"
                            inputRef={newWordEng}
                            onChange={(e) => {
                                setTarget(e.target.value);
                            }}

                        />

                        <Button variant="contained"
                                startIcon={<AddIcon/>}
                                onClick={() => {
                                    {
                                        (user.role === 'student') ? addWordAsStudent() : addWordAsAdmin()
                                    }
                                    handleCloseAdd();
                                }}
                                style={{width: "500px", marginTop: "20px"}}
                        >add</Button>

                    </Box>

                </Modal>


                <div>
                    <h2>Words ({wordsCount})</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 800}} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{backgroundColor: "rgba(255, 194, 194, 0.5)"}}>
                                    <TableCell style={{fontWeight: " 900", color: "#003066"}}
                                               align="left">Word</TableCell>
                                    <TableCell style={{fontWeight: " 900", color: "#003066"}}
                                               align="left">Translation</TableCell>
                                    {(user.role === 'student') ? null :
                                        <TableCell style={{fontWeight: " 900", color: "#003066", width: "100px"}}
                                                   align="right">Edit</TableCell>}
                                    {(user.role === 'student') ? null :
                                        <TableCell style={{fontWeight: " 900", color: "#003066", width: "100px"}}
                                                   align="right">Delete</TableCell>}

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listOfWords?.map((row) => (
                                    <TableRow style={{backgroundColor: "rgba(255, 194, 194, 0.2)"}}
                                              key={row.id_word}
                                              sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="left">
                                            {row.source}
                                        </TableCell>

                                        <TableCell align="left">
                                            {row.target}
                                        </TableCell>

                                        {/*{(user.role === 'student') ? null :
                                            <TableCell align="right">

                                                                                                <Modal
                                                    open={openEdit}
                                                    onClose={handleCloseEdit}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"

                                                >

                                                    <Box sx={style}>

                                                        <Typography id="modal-modal-title" variant="h4" component="h1">
                                                            Edit word
                                                        </Typography>
                                                        <h3>
                                                            Word
                                                        </h3>
                                                        <TextField
                                                            sx={{paddingBottom: 2}}
                                                            fullWidth
                                                            id="outlined-basic"
                                                            label="Type word in czech"
                                                            variant="outlined"
                                                            inputRef={newWordCz}
                                                            onChange={(e) => {
                                                                setSource(e.target.value);
                                                            }}
                                                        />
                                                        <h3>
                                                            Translation
                                                        </h3>
                                                        <TextField
                                                            sx={{paddingBottom: 2}}
                                                            fullWidth
                                                            id="outlined-basic"
                                                            label="Type word in eng"
                                                            variant="outlined"
                                                            inputRef={newWordEng}
                                                            onChange={(e) => {
                                                                setTarget(e.target.value);
                                                            }}

                                                        />

                                                        <Button variant="contained"
                                                                onClick={() => {
                                                                    editWord(row.id_word);
                                                                    handleCloseEdit();
                                                                }}
                                                                style={{width: "500px", marginTop: "20px"}}
                                                        >edit</Button>

                                                    </Box>
                                                </Modal>
                                            </TableCell>}
                                        */}

                                        {(user.role === 'student') ? null :
                                            <TableCell align="right">
                                                <IconButton onClick={() => {
                                                    editWord(row.id_word);
                                                }}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </TableCell>
                                        }

                                        {(user.role === 'student') ? null :
                                            <TableCell align="right">
                                                <IconButton onClick={() => {
                                                    deleteWord(row.id_word)
                                                }}>
                                                    <DeleteOutlinedIcon/>
                                                </IconButton>
                                            </TableCell>}
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