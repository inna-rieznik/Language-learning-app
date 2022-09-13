import {rerenderTree} from "../../render";

let state = {
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
    ]
}

export let addWordToVocabulary = (word, translation) => {
    let newWord = {
        id: 8,
        cz: word,
        eng: translation
    }

    state.wordsData.push(newWord);
    rerenderTree(state);
}

/*export let updateNewWordText = (newWordInput) => {
    state.newWordText = newWordInput;
    rerenderTree(state);
}*/

export default state;