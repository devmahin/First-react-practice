export default function Singers({details}){
    console.log(details)

    const {genre,name,notableSongs} = details;





    return (
        <div>
            <h1>Name : {name}</h1>
            <h2>Country : {genre}</h2>
            <ul>
                {notableSongs.map(val => <li>{val}</li>)}
            </ul>
        </div>
    )
    
}