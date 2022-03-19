import { useState } from "react";
import Header from "./header";
import { BabyNameProps } from "./name";
import babyInfoArray from "../data/babyNamesData.json";
import alphabetSorter from "../utils/alphabetSorter";

interface NameLists {
  favourites: BabyNameProps[];
  searches: BabyNameProps[];
  search: string;
}

export default function Main(): JSX.Element {
  const babyInfoArraySorted: BabyNameProps[] = babyInfoArray.sort(
    (a: BabyNameProps, b: BabyNameProps) => alphabetSorter(a.name, b.name)
  );

  const nameLists: NameLists = {
    favourites: [],
    searches: babyInfoArraySorted,
    search: "",
  };
  const [nameListsState, setnameListsState] = useState<NameLists>(nameLists);

  const handleAddFavourite = (babyInfo: BabyNameProps) => {
    const index = nameListsState.searches.indexOf(babyInfo);
    const newSearches = [...nameListsState.searches];
    newSearches.splice(index, 1);

    const newState: NameLists = {
      favourites: [...nameListsState.favourites, babyInfo],
      searches: newSearches,
      search: nameListsState.search,
    };
    setnameListsState(newState);
  };

  const handleDeleteFavourite = (babyInfo: BabyNameProps) => {
    const index = nameListsState.favourites.indexOf(babyInfo);
    const newFavourites = [...nameListsState.favourites];
    newFavourites.splice(index, 1);

    const newState: NameLists = {
      favourites: newFavourites,
      searches: [...nameListsState.searches, babyInfo],
      search: nameListsState.search,
    };
    setnameListsState(newState);
  };

  const babySearchFilter = (babyInfo: BabyNameProps): boolean =>
    babyInfo.name.toLowerCase().includes(nameListsState.search.toLowerCase());

  const searchNameListsState = (newSearch: string) => {
    const newState: NameLists = {
      favourites: nameListsState.favourites,
      searches: nameListsState.searches,
      search: newSearch,
    };
    setnameListsState(newState);
  };

  const nameElement = (babyInfo: BabyNameProps): JSX.Element => (
    <>
      {babySearchFilter(babyInfo) && (
        <button
          className={"name" + babyInfo.sex}
          onClick={() => handleAddFavourite(babyInfo)}
        >
          {babyInfo.name}
        </button>
      )}
    </>
  );

  const nameFavouriteElement = (babyInfo: BabyNameProps): JSX.Element => (
    <>
      {babySearchFilter(babyInfo) && (
        <button
          className={"fav-name" + babyInfo.sex}
          onClick={() => handleDeleteFavourite(babyInfo)}
        >
          {babyInfo.name}
        </button>
      )}
    </>
  );

  return (
    <>
      <Header />
      <div className="navbar">
        <p>Search baby names </p>
        <input
          placeholder="Search"
          value={nameListsState.search}
          onChange={(e) => searchNameListsState(e.target.value)}
        />
      </div>
      <div className="favourites">
        <h2>Favourites: </h2>
        {nameListsState.favourites.map(nameFavouriteElement)}
        <hr />
      </div>
      <div className="names">{nameListsState.searches.map(nameElement)}</div>
    </>
  );
}
