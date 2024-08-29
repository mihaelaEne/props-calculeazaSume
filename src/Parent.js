import Child from "./Child";    
import React, { useState } from 'react';

// function Parent(){
//     return(
//         <div className="Parent">
            
//             <Child test1={"Mihaela"} test2={"bolovan"}></Child>
//         </div>
//     );
// }



 function Parent(){
    const [numar1, setNumar1] = useState(0);
    const [numar2, setNumar2] = useState(0);
    const [suma, setSuma] = useState(0);


    const calculeazaSuma = () => {
        setSuma(Number(numar1) + Number(numar2));
      };


      return (
        <div>
          <h1>Suma: {suma}</h1>
          <input 
            type="number" 
            value={numar1} 
            onChange={(e) => setNumar1(e.target.value)} 
            placeholder="Primul număr" 
          />
          <input 
            type="number" 
            value={numar2} 
            onChange={(e) => setNumar2(e.target.value)} 
            placeholder="Al doilea număr" 
          />
          
          <Child calculeazaSuma={calculeazaSuma} />
        </div>
      );
    }
    


export default Parent;