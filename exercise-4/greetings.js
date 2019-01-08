
export function buildGreeting(name) {
    return `Hello, ${name}! How are you?`
}

export function choosePartingWord(language) {
    return (language === 'Spanish') ? 'Adios!' : 'Goodbye!';
}

export function choosePartingWordFromObject(data) {
    const { name } = data;

    return `Goodbye, ${name}!`;
}

export function choosePartingWordFromObjectDifferntWay({name}) {
    return `Goodbye, ${name}!`;
}

export function mapPartingWords(languages) {
    return languages.map(value => choosePartingWord(value));
}
