export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
}

export type ScrambleWordsAction = {
  type: "no tengo la menor idea de cuales acciones necesito";
};

const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): ScrambleWordsSatet => {
  const ShuffleWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: ShuffleWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(ShuffleWords[0]),
    skipCounter: 0,
    words: ShuffleWords,
  };
};

export type ScrambleWordActions =
  | { type: "NO_ACTION_DEFINED_YET" }
  | { type: "SET_GUESS"; payload: string }
  | { type: "SUBMIT_GUESS" }
  | { type: "SKIP_WORD" };

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsAction
): ScrambleWordsState => {
  switch (action.type) {
    default:
      return state;
  }
};
