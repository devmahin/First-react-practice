import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singers from './singers'
import BooksStores from './booksStores'
function App() {
  const [count, setCount] = useState(0)
  let actors = ["adib","mahin", "antor","tushar"]
  const top10Singers = [
    {
      name: "Beyoncé",
      genre: "R&B/Pop",
      albums: ["Lemonade", "B'Day", "Dangerously in Love"],
      notableSongs: ["Single Ladies", "Halo", "Crazy in Love"],
      awards: ["Grammy Awards", "MTV Video Music Awards", "Billboard Music Awards"]
    },
    {
      name: "Adele",
      genre: "Pop/Soul",
      albums: ["21", "25", "19"],
      notableSongs: ["Hello", "Someone Like You", "Rolling in the Deep"],
      awards: ["Grammy Awards", "Academy Awards", "Brit Awards"]
    },
    {
      name: "Taylor Swift",
      genre: "Pop/Country",
      albums: ["1989", "Fearless", "Red"],
      notableSongs: ["Shake It Off", "Love Story", "Blank Space"],
      awards: ["Grammy Awards", "American Music Awards", "MTV Video Music Awards"]
    },
    // Add details for other singers here
  ];
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationYear: 1960,
      summary: "Set in the fictional town of Maycomb, Alabama, the novel focuses on the trial of a black man falsely accused of raping a white woman, as seen through the eyes of young Scout Finch."
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      publicationYear: 1949,
      summary: "Set in a totalitarian society where the government, led by the Party and its leader Big Brother, exerts absolute control over every aspect of people's lives, including their thoughts and actions."
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publicationYear: 1925,
      summary: "Set in the fictional town of West Egg on prosperous Long Island in the summer of 1922, the novel portrays the extravagant lifestyle and moral decay of the wealthy during the Jazz Age."
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publicationYear: 1997,
      summary: "Follows the journey of a young boy named Harry Potter who discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he uncovers the truth about his parents' deaths and battles the dark wizard Voldemort."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationYear: 1951,
      summary: "Narrated by Holden Caulfield, a teenager who is expelled from prep school and wanders through New York City, struggling with his feelings of alienation and searching for authenticity in a world he sees as phony."
    }
  ];
  
  
  

  return (
    <>

      <h1>Vite + React</h1>
    <BooksStores book={books}></BooksStores>
    <Actor name={"mahin"}></Actor>
    {
      actors.map(val => <Actor name={val}></Actor>)
    }
    {
      top10Singers.map(sin => <Singers details={sin}></Singers>)
    }

      {/* <Todo task="Learn react js" isResult={true}></Todo>
      <Todo task="Learn angular js" isResult={false}></Todo>
      <Person></Person>
      <Student gread="7" score= "100"></Student>
      <Student gread="8" score="200"></Student>
      <Student ></Student>
      <Devices name="Laptop" price="2323"></Devices>
      <Devices name="Mobile" price="2323"></Devices>
      <Devices name="Watch" price="2323"></Devices> */}
    </>
  )
}



function Devices (props){
  // console.log(props)
  return <h1>Devices name : {props.name}</h1>
}





function Student (props){
  const {gread=0,score = 0} = props;
  return (
    <div>
      <p>greade : {gread}</p>
      <p>score : {score}</p>
    </div>
  )
}


  function Person (){
    return (
      <div className='student'>
        <h1>Bangla</h1>
        <h4>Hasan</h4>
      </div>
    )
  }





export default App
