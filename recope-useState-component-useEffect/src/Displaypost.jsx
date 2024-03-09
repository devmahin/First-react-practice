import "./Displaypost.css"
export default function Display({props}){
    const {id,body,title} = props;
    return (
        <div className="box">
            <h1>userId : {body}</h1>
            <p>title : {title}</p>
            <p>body : {id}</p>
        </div>
    )
}