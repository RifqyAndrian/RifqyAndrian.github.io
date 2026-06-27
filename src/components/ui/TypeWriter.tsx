import { useReducer, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

interface State {
  wordIndex: number;
  text: string;
  isDeleting: boolean;
}

type Action =
  | { type: 'TYPE'; word: string }
  | { type: 'DELETE'; word: string }
  | { type: 'NEXT_WORD'; totalWords: number }
  | { type: 'START_DELETE' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TYPE':
      return { ...state, text: action.word.substring(0, state.text.length + 1) };
    case 'DELETE':
      return { ...state, text: action.word.substring(0, state.text.length - 1) };
    case 'NEXT_WORD':
      return { ...state, isDeleting: false, wordIndex: (state.wordIndex + 1) % action.totalWords, text: '' };
    case 'START_DELETE':
      return { ...state, isDeleting: true };
    default:
      return state;
  }
}

// Stable check — evaluated once, not on every render
const prefersReduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function TypeWriter({
  words,
  className = '',
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2500,
}: TypeWriterProps) {
  const [state, dispatch] = useReducer(reducer, {
    wordIndex: 0,
    text: '',
    isDeleting: false,
  });

  // Keep words stable across renders via ref
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    if (prefersReduced) return;

    const currentWord = wordsRef.current[state.wordIndex];

    if (!state.isDeleting) {
      if (state.text === currentWord) {
        const id = setTimeout(() => dispatch({ type: 'START_DELETE' }), pauseDuration);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => dispatch({ type: 'TYPE', word: currentWord }), speed);
      return () => clearTimeout(id);
    } else {
      if (state.text === '') {
        dispatch({ type: 'NEXT_WORD', totalWords: wordsRef.current.length });
        return;
      }
      const id = setTimeout(() => dispatch({ type: 'DELETE', word: currentWord }), deleteSpeed);
      return () => clearTimeout(id);
    }
  }, [state, speed, deleteSpeed, pauseDuration]);

  const displayText = prefersReduced ? words[0] : state.text;

  return (
    <span className={className}>
      <span className="text-gradient">{displayText}</span>
      {!prefersReduced && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="text-primary ml-0.5"
          aria-hidden="true"
        >
          |
        </motion.span>
      )}
    </span>
  );
}
