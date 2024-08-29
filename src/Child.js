// function Child({test1,test2}){
//     return(
//         <div >
//             <p>{test1}</p>
//             <p>{test2}</p>
//         </div>
//     );
// }



function Child({ calculeazaSuma }) {
    return (
      <button onClick={calculeazaSuma}>
        Calculeaza Suma
      </button>
    );
  }

export default Child;