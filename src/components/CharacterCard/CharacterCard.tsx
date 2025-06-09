import type { Character, CharacterName } from "@/models";
import styles from "./character-card.module.css";
import { useEffect, useState } from "react";
import { getCharacterData } from "@/core";

interface Props {
  name: CharacterName;
}

export const CharacterCard = ({ name }: Props) => {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const char = await getCharacterData(name);
      if (!char) {
        console.error(`error fetching character with name ${name}`);
      }
      setCharacter(char);
    };
    fetchCharacter();
  }, [name]);

  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${character?.img})` }}
      ></div>
      <div className={styles.cardTitle}>
        <h2>{character?.name}</h2>
      </div>
    </div>
  );
};
