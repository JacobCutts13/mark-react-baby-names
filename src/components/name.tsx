export interface BabyNameProps {
    id: number;
    name: string;
    sex: string;
}

export default function BabyName(props: BabyNameProps): JSX.Element {
    return(
        <div className="name">
            {props.name}
        </div>
    )

}