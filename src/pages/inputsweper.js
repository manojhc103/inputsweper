import { useState } from "react";

const InputField=()=>{
    const [input1, setInput1] = useState(null);
    const [input2, setInput2] = useState(null);
      
    console.log(input1);
    console.log(input2);
    
    

    const moveTo1 =()=>{
        setInput2(input1);
       setInput1('');        

    }

    const moveTo2 =()=>{
        setInput1(input2);
        setInput2('');
    }
   

    return(
        <div className="main_div">
            <div className="child_div">
                <label>1</label>
                <input type="text" id="name" name="name" value={input1} onChange={(e)=>setInput1(e.target.value)} />
                <div className="btn_div">
                <button onClick={moveTo1}>Move to 2</button> 
                </div>
            </div>
            <div className="child_div">
                <label>2</label>
                <input type="text" id="name" name="name" value={input2} onChange={(e)=>setInput2(e.target.value)}/>
                <div className="btn_div">
                <button onClick={moveTo2}>Move to 1</button>
                </div>
            </div>
        </div>
    )
}
export default InputField