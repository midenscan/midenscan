import { useState, useEffect } from 'react';

type DebouncedInputHandler = (inputValue: string) => void;

export function useDebouncedInput(initialValue: string, delay: number): [string, DebouncedInputHandler] {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  const handleInputChange: DebouncedInputHandler = (inputValue) => {
    setValue(inputValue);
  };

  return [debouncedValue, handleInputChange];
}
