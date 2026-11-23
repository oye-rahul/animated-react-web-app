import React from 'react'
import Card from './components/card.jsx'
import A_Card from './components/apple_card.jsx'
import UseState from './components/useState.jsx';
import Nots_tow_way from './components/nots_tow_way.jsx';
import Wall from './components/wall-api/wall.jsx';


function App() {

  const apple_card = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdFF9xE_QwUhNHtzJUhF-P4zIaR8ccURoRWnpP9zzFQ&s=10",
    title: "Taj Mahal, India",
    description: "Most Popular World Heritage Site",
    price: 199,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    title: "Eiffel Tower, France",
    description: "Iconic Landmark of Paris",
    price: 249,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    title: "Great Wall, China",
    description: "Historic Wonder of the World",
    price: 299,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",
    title: "Colosseum, Italy",
    description: "Ancient Roman Amphitheatre",
    price: 179,
  },
];

  return (
    // <div className="app">
    //   <Card user="Rahul Malvi" p="This is a simple card component." img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1nbHUkNGhFbc8zdOvRkuLlagAieX44YPept41Xdmpw&s=10" />
    //   <Card user="John Doe" p="This is another card component." img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EquxyzX98EhQ4GlqBr4h4_KbXbEUnmx4M4tIPrgBPw&s=10" />
    //   <Card user="Jane Smith" p="This is yet another card component." img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjoBFvNMG1k5dTntmFVkV_1MmceAdGEWAiCujuq1bmRWeEc4nryXvcj4&s=10" />
    // </div>

    // <div className="app-2">
    //   {apple_card.map(function(elem, index) {
    //     return <A_Card key={elem.id} user={elem.title} p={elem.description} img={elem.image} price={elem.price} />;
    //   })}
    // </div>

    // <UseState/>

    // <Nots_tow_way/>

    <Wall/>

  )
}

export default App