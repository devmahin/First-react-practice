import Bookcom from "./bookstore"

export default function BooksStores({book}){
    console.log(book)
    return (
        <div>
            <h1>{book.length}
            </h1>
            {
            book.map(val => <Bookcom book={val}></Bookcom>)
           }
        </div>
    )
}