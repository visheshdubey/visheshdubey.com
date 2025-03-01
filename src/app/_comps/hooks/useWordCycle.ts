import { useEffect, useState } from "react";

export const useWordCycle = (words: string[], duration: number = 2500) => {
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words.length]);

    return { currentWord, currentIndex: currentWord };
};
