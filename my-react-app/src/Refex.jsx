import {useRef} from 'react';
const Refex = () => {
    let a=5
    const refcount = useRef(0);
    console.log("Object Reacorded")
    function handleRef(){
        refcount.current = refcount.current + 1;
        console.log("refcount=",refcount.current)
        if(refcount.current==a)
            alert("counter ="+refcount.current)
    }
    return(
        <div>
        <h1>Refcount={refcount.current}</h1>
        <button onClick={handleRef}>Click</button>
        <p>{a}</p>
        </div>
    )
}
export default Refex;