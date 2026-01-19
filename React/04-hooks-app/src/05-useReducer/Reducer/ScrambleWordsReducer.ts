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
  totalWords: number;
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

export const getInitialState = (): ScrambleWordsState => {
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
    totalWords: ShuffleWords.length,
  };
};

export type ScrambleWordActions =
  | { type: "CHECK_ANSWER" }
  | { type: "SET_GUESS"; payload: string }
  | { type: "SUBMIT_GUESS" }
  | { type: "SKIP_WORD" };

export const ScrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordActions,
): ScrambleWordsState => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };
    case "CHECK_ANSWER": {
      // Lógica para verificar la respuesta
      if (state.currentWord === state.guess) {
        const newWords = state.words.slice(1);
        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: "",
          currentWord: newWords[0] || "",
          scrambledWord: scrambleWord(newWords[0] || ""),
        };
      }

      return {
        ...state,
        guess: "",
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
      };
    }
    default:
      return state;
  }
};
