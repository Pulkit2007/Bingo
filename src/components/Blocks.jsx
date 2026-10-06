
export default function Blocks(props){
    return(
        <button
            className={`number${props.marked ? " marked" : ""}`}
            type="button"
            disabled
            aria-pressed={props.marked}
        >
            {props.value}
        </button>
    )
}