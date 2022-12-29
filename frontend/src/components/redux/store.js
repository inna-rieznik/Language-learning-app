import wordsReducer from "./WordsReducer";

const ADD_WORD_TO_VOCABULARY = 'ADD_WORD_TO_VOCABULARY';
const UPDATE_NEW_WORD_TEXT = 'UPDATE_NEW_WORD_TEXT';

let store = {
    _state: {
        lessonsData: [
            {
                id: 1,
                title: 'Present simple',
                intro_text: 'lorem ipsum',
                grammar_rule_title: 'Grammar title',
                grammar_rule: 'Lorem ipsum'
            },
            {
                id: 2,
                title: 'Future simple',
                intro_text: 'lorem ipsum',
                grammar_rule_title: 'Grammar title',
                grammar_rule: 'Lorem ipsum'
            },
            {
                id: 3,
                title: 'Past simple',
                intro_text: 'lorem ipsum',
                grammar_rule_title: 'Grammar title',
                grammar_rule: 'Lorem ipsum'
            }
        ],
        wordsData: {
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
        },
    },


    getState() {
        return this._state;
    },

    _rerenderTree() {
        console.log("state was changed");
    },

    subscribe(observer) { //here I can call function from index.js
        this._rerenderTree = observer; //override rerenderTree by observer from index.js
    },


}


export default store;

