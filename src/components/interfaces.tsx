export interface BabyNameProps {
    id: number;
    name: string;
    sex: string;
  }

export interface NameLists {
    favourites: BabyNameProps[];
    searches: BabyNameProps[];
    search: string;
    searchGender: string;
  }