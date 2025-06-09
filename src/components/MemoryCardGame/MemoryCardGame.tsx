import { useState } from "react";
import styles from "./memory-card-game.module.css";
import { CharactersNames, type CharacterName } from "@/models";
import { shuffleArray } from "@/utilities";
import { CharacterCard } from "@/components";

export const MemoryCardGame = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);
  const [namesStreak, setNameStreak] = useState<Array<CharacterName>>([]);

  const shuffledCharNames = shuffleArray([...CharactersNames]);

  const handleClick = (name: string) => {
    const clickedName = name as CharacterName;
    if (namesStreak.includes(clickedName)) {
      setNameStreak([]);
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      return;
    }

    setNameStreak([...namesStreak, clickedName]);
    setScore(score + 1);
    if (score + 1 === CharactersNames.length) {
      setBestScore(20);
      setScore(0);
      return;
    }
  };

  return (
    <div>
      <div className={styles.gameInfo}>
        <div className={styles.headings}>
          <h1>Memory card game</h1>
          <h4>
            Get points by clicking on an image but don't click on any more than
            once!
          </h4>
        </div>

        <div className={styles.scoresContainer}>
          <h2>Score: {score}</h2>
          <h2>
            Best Score: {bestScore}{" "}
            {bestScore === CharactersNames.length &&
              "(You've reached the max score!)"}
          </h2>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {shuffledCharNames.map((name, idx) => {
          return (
            <div key={`card-${idx}`} onClick={() => handleClick(name)}>
              <CharacterCard name={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
