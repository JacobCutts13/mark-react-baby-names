import { useState } from "react";
import Header from "./header";
import BabyNames from "./names";
import { BabyNameProps } from "./name";
import babyInfoArray from "../data/babyNamesData.json";

export default function Main(): JSX.Element {
  const [search, setSearch] = useState("");
  const babySearchFilter = (babyInfo: BabyNameProps) =>
    babyInfo.name.toLowerCase().includes(search.toLowerCase());
  const babyInfoArrayFiltered: BabyNameProps[] =
    babyInfoArray.filter(babySearchFilter);

  return (
    <>
      <Header />
      <div className="navbar">
        <p>Search baby names </p>
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <BabyNames babyInfoArray={babyInfoArrayFiltered} />
    </>
  );
}
