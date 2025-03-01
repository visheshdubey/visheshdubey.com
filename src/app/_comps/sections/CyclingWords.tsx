"use client";

import { useWordCycle } from "../hooks/useWordCycle";

type Props = {
  words: string[];
  className?: string;
  duration?: number;
};

const gradients = [
  "from-red-400 via-purple-400 to-blue-400",
  "from-green-400 via-teal-400 to-blue-400",
  "from-orange-400 via-pink-400 to-purple-400",
  "from-blue-400 via-indigo-400 to-purple-400",
];

const CyclingWords = ({ words, className, duration }: Props) => {
  const { currentWord, currentIndex } = useWordCycle(words, duration);

  return (
    <div className={`bg-gradient-to-r ${gradients[currentIndex]} bg-clip-text text-transparent ${className}`}>
      {words[currentWord]}
    </div>
  );
};

export default CyclingWords;
