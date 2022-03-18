import BabyName from "./name";
import {BabyNameProps} from "./name";
import babyInfoArray from "../data/babyNamesData.json";

export default function BabyNames(): JSX.Element {

    const babyInfoArrayDeclared: BabyNameProps[] = babyInfoArray

    // const babyInfoToName = (babyInfo: BabyNameProps) => (
    //      <BabyName id={babyInfo.id}  name={babyInfo.name} sex={babyInfo.sex} />
    // )
    // const mappedBabyInfo = babyInfoArrayDeclared.map(babyInfoToName);

    return(
        <div className="names">
            {babyInfoArrayDeclared.map((babyInfo: BabyNameProps) => (
                <BabyName id={babyInfo.id}  name={babyInfo.name} sex={babyInfo.sex} key="{babyInfo.id}"/> 
                )
            )}
        </div>
    )
}