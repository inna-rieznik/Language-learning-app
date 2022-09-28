const ADD_WORD_TO_VOCABULARY = 'ADD_WORD_TO_VOCABULARY';
const UPDATE_NEW_WORD_TEXT = 'UPDATE_NEW_WORD_TEXT';

let initialState = {
    words: [
        {id: 1, cz: 'Ano', eng: 'Yes'},
        {id: 2, cz: 'Ne', eng: 'No'},
        {id: 3, cz: 'Prosím', eng: 'Please'},
        {id: 4, cz: 'Děkuju', eng: 'Thank you'},
        {id: 5, cz: 'Dobrý den', eng: 'How do you do'},
        {id: 6, cz: 'Nashledanou', eng: 'Yes'},
        {id: 7, cz: 'S dovolenim', eng: 'Excuse me'},
    ],
    newWordText: " ",
    newTranslationText: " "
}

const wordsReducer = (state = initialState, action) => {
    //edit and  return state
    switch (action.type) {
        case ADD_WORD_TO_VOCABULARY:
            let newWord = {
                id: 8,
                cz: state.newWordText,
                eng: state.newTranslationText
            }
            state.words.push(newWord);
            state.newWordText = '';
            state.newTranslationText = '';
            return state;
        case UPDATE_NEW_WORD_TEXT:
            state.newWordText = action.newWord;
            state.newTranslationText = action.newTranslation;
            return state;
        default:
            return state;
    }

}
export default wordsReducer;

export const addWordToVocabularyActionCreator = () => {
    return {
        type: ADD_WORD_TO_VOCABULARY
    }
};

export const updateNewWordTextActionCreator = (word, translation) => {
    return {
        type: UPDATE_NEW_WORD_TEXT,
        newWord: word,
        newTranslation: translation
    }
};