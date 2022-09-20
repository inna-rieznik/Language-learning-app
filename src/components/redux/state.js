let store ={
    _state : {
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
            },
            {
                id: 4,
                title: 'Present perfect',
                intro_text: 'lorem ipsum',
                grammar_rule_title: 'Grammar title',
                grammar_rule: 'Lorem ipsum'
            },
            {
                id: 5,
                title: 'Past perfect',
                intro_text: 'lorem ipsum',
                grammar_rule_title: 'Grammar title',
                grammar_rule: 'Lorem ipsum'
            },
            {
                id: 6,
                title: 'Articles',
                intro_text: 'lorem ipsum',
                grammar_rule_title: 'Grammar title',
                grammar_rule: 'Lorem ipsum'
            }
        ],
        wordsData: [
            {id: 1, cz: 'Ano', eng: 'Yes'},
            {id: 2, cz: 'Ne', eng: 'No'},
            {id: 3, cz: 'Prosím', eng: 'Please'},
            {id: 4, cz: 'Děkuju', eng: 'Thank you'},
            {id: 5, cz: 'Dobrý den', eng: 'How do you do'},
            {id: 6, cz: 'Nashledanou', eng: 'Yes'},
            {id: 7, cz: 'S dovolenim', eng: 'Excuse me'}
        ],
        newWordText: "fixed value",
        newTranslationText: "fixed value"
    },

    getState(){
        return this._state;
    },

    _rerenderTree(){
        console.log("state was changed");
    },

    addWordToVocabulary(){
        let newWord = {
            id: 8,
            cz:  this._state.newWordText,
            eng: this._state.newTranslationText
        }

        this._state.wordsData.push(newWord);
        this._state.newWordText = '';
        this._state.newTranslationText = '';
        this._rerenderTree(this._state);
    },

    updateNewWordText(word, translation){
        this._state.newWordText = word;
        this._state.newTranslationText = translation;
        this._rerenderTree(this._state);
    },

    subscribe(observer){ //here I can call function from index.js
        this._rerenderTree = observer; //override rerenderTree by observer from index.js
    }
}

export default store;

