export interface Character {
  name: string;
  img: string;
}

export const CharactersNames = [
  "Socrates",
  "Plato",
  "Aristotle",
  "Pythagoras",
  "Heraclitus",
  "Parmenides",
  "Leucippus",
  "Zeno_of_Citium",
  "Empedocles",
  "Thales_of_Miletus",
  "Democritus",
  "Epicurus",
  "Diogenes",
  "Anaxagoras",
  "Anaximander",
  "Zeno_of_Elea",
  "Theophrastus",
  "Herodotus",
  "Marcus_Aurelius",
  "Seneca_the_Younger",
] as const;

export type CharacterName = (typeof CharactersNames)[number];
