import BabyName from "./name";
import {BabyNameProps} from "./name";
import babyInfoArray from "../data/babyNamesData.json";
import alphabetSorter from "../utils/alphabetSorter";

export default function BabyNames(): JSX.Element {

    const babyInfoArraySorted: BabyNameProps[] = babyInfoArray.sort((a: BabyNameProps, b: BabyNameProps) => alphabetSorter(a.name, b.name))



    return(
        <div className="names">
            {babyInfoArraySorted.map((babyInfo: BabyNameProps) => (
                <BabyName id={babyInfo.id}  name={babyInfo.name} sex={babyInfo.sex} key="{babyInfo.id}"/> 
                )
            )}
        </div>
    )
}