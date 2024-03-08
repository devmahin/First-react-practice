// export default function Todo ({isResult,task}){
//     if(isResult === true){
//         return (
//             <div style={
//                 {
//                     border: "2px solid red",
//                     borderRedius : '10px',
//                     backgroundColor : "red",
//                     color : "white"
//                 }
//             }>
//                 <h1>Finished : {task}</h1>
//             </div>
//         )
    
//     }else{
//         return (
//             <div style={
//                 {
//                     border: "2px solid red",
//                     borderRedius : '10px',
//                     backgroundColor : "red"
//                 }
//             }>
//                 <h1>Unfinished : {task}</h1>
//             </div>
//         )
    
//     }
// }


// export default function Todo ({isResult,task}){
//         return (
//             <li> {isResult ? "Finished" : "Unfinished"} : {task}</li>
//         )
    
// }

// export default function Todo ({isResult,task}){
//         return (
//             <li>  {task} {isResult && ": Done"}</li>
//         )
    
// }


export default function Todo ({isResult,task}){
        return (
            <li>  {task} {isResult || ": Unfinished"}</li>
        )
    
}



