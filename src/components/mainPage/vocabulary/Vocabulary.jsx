import s from "../vocabulary/Vocabulary.module.css";
import * as React from 'react';
import Action from "./action/Action";
//import Button from "./action/Button";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import * as props from "../../redux/state";

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

const Vocabulary = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //function to add data from inputs to wordsData
    let newWordCz = React.createRef();
    let newWordEng = React.createRef();

    let addWordToVocabulary = () => {
       debugger;
        let word = newWordCz.current.value;
        let translate = newWordEng.current.value;
        props.addWordToVocabulary(word, translate);
        //alert(word);
    };

    return (
        <div className={s.vocabulary}>
            <h1>Vocabulary</h1>

            <Action  urlName='my_words' title='my words'/>
            <Button variant="contained" href='quiz' >Review words</Button>
          {/*  <Button variant="contained" href='modal_add_word'  startIcon={<AddIcon />} >add new word</Button>*/}
            <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>add new word</Button>
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
                             sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
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
                            <Button variant="contained" startIcon={<AddIcon />} onClick={addWordToVocabulary}>add</Button>
                        </Box>

                    </Box>
                </Fade>
            </Modal>
            {/*<Button  urlName='quiz' buttonAction='review words'/>
            <Button  urlName='modal_add_word' buttonAction='+add new word'/>*/}

        </div>
    );
}

export default Vocabulary;