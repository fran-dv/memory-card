import type { Character, CharacterName } from "@/models";
import { getAPIURL } from "@/core";

const fetchCharacter = async (name: CharacterName): Promise<JSON | null> => {
  const url = getAPIURL(name);
  const response = await fetch(url).catch((err) => {
    console.error(err);
    return null;
  });

  return response ? response.json() : response;
};

const fetchedDataToCharacter = (fetchedData: JSON): Character => {
  const data = JSON.parse(JSON.stringify(fetchedData));
  console.log("data: ", data);
  return {
    name: data.query.pages[0].title,
    img: data.query.pages[0].original.source,
  };
};

export const getCharacterData = async (
  name: CharacterName,
): Promise<Character | null> => {
  console.log(name);
  const fetchedData = await fetchCharacter(name);
  if (!fetchedData) {
    console.error("there were problems fetching the data");
    return null;
  }

  return fetchedDataToCharacter(fetchedData);
};
