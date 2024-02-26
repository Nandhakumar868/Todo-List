import React,{useState} from 'react';
import colorNames from 'color-name';

const ColorChange = () => {
    const [color, setColor] = useState('')
    // const [hexValue, setHexValue] = useState('')
    const [isDarkText, setIsDarkText] = useState(true)

    return(
        <div className='bg-cyan-400 h-[100vh] flex flex-col justify-center items-center'>
            <div>
                <div className={`bg-${color ? color : "white"} color:${isDarkText ? "#000" : "#FFF"} h-48 w-30 mb-3 border-2 border-gray-500 flex justify-center items-center`}>
                    <p>{color ? color : "Empty Value"}</p>
                    {/* <p>{hexValue ? hexValue : null}</p> */}
                </div>
                <input onChange={(e)=>{setColor(e.target.value);}} value={color} type="text" placeholder="Enter a color" required></input><br></br>
                <button onClick={()=> setIsDarkText(!isDarkText)} className='border-black mt-2 bg-gray-500 p-1 hover:bg-sky-700 '>Toggle Text Color</button>
            </div>
        </div>
    );
}

export default ColorChange;