import './App.css';

// Import My Own Made Components
import Navbar from './React-Components/TopBar';
import ProductCard from './React-Components/Product';

// Data
import { products } from './Data/products';

function App() {

  /* DROP DOWN OPTIONS */
  const dropdownoptions = [
    {
      "name":'Contact Us',
      "href":'/contact',
    },
    {
      "name":'Your Cart',
      "href":'/cart',
    },
    {
      "name":'Your Orders',
      "href":'/order',
    }
  ]

  const dropdownname = 'Options' 
  
  /* DROP DOWN OPTIONS END */

  /* Make the search bar for the searching of products */
  const searchtitle = "Search"

  // check function
  const check = (username)=>{
    console.log(username)
    
    if(!username)
        {
            return false
        }
        return true 
  }
  return (
    <div className="App">
      <Navbar title="Shopping Site" searchbar={true} searchtitle={searchtitle} dropdown={true} dropdownoptions={dropdownoptions} dropdownname ={dropdownname} check={check}/>
      {/* {console.log(products)}  */}
      <div className="row">
        <h3>Our Products </h3>
      {
        products.length > 0 ? products.map(
          (e)=>{
            console.log(e) 
            return (<ProductCard details = {e} addtocart={true} addtoorder={true} whom={"App"}/>)
          }
        )
        : <div className='container'>No Items are Left To Show</div>
      }
      </div>
    </div>
  );
}

export default App
