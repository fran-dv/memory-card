import { CharactersNames, type CharacterName } from "@/models";

// In this case simply the name is sufficient. If the used API
// changes in a future, only modify the params object and the URL
export const charactersURLParams: Record<CharacterName, string> =
  Object.fromEntries(CharactersNames.map((name) => [name, name])) as Record<
    CharacterName,
    string
  >;

export const getAPIURL = (name: CharacterName) => {
  return `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=original&titles=${charactersURLParams[name]}&origin=*`;
};
