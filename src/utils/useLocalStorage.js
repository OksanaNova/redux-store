import { useEffect } from 'react';

export const useLocalStorage = (value, key) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
};