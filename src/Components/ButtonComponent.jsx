const ButtonComponent = ({text, functionToDo, classN}) => {
    return <>
    <button className={classN} onClick={functionToDo}>{text}</button>
    </>
}
// Toujours exporter la fonction
export default ButtonComponent;