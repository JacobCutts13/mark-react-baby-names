export interface BabyNameProps {
  id: number;
  name: string;
  sex: string;
}

export default function BabyName(props: BabyNameProps): JSX.Element {
  return (
    <button
      className={"name" + props.sex}
      onClick={() => console.log(props.name)}
    >
      {props.name}
    </button>
  );
}
