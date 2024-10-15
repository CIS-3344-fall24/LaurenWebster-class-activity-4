function DoubleArray(props){
    const doubled = props.numbers.map((num, index) => num * 2);
    console.log(doubled);

    return(
        <div>
        <h1><b>Doubled Array</b></h1>
        <p>Original Array: {(props.numbers.join(", "))}</p>
        <p>Doubled Array: {(doubled.join(", "))}</p>
        </div>
    )
}
export default DoubleArray;
