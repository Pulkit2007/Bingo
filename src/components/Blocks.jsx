
export default function Blocks(props){

    const style = props.marked
        ? { backgroundColor: "green", color: "white" }
        : {};

    return(
        <button className="number" style={style} onClick={props.onClick}>
            {props.value}
        </button>
    )
}