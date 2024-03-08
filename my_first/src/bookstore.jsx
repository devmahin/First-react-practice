import './book.css'
export default function Bookcom ({book}){    


    console.log(book)
    const {title,author} = book;
    return (
        <div className="booksStyle">
            <h1>{title}</h1>
            <h1>{author}</h1>
        </div>
    )
}