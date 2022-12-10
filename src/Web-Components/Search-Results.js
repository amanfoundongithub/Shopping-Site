import '../App.css';

// Import My Own Made Components
import Navbar from '../React-Components/TopBar';
import ProductCard from '../React-Components/Product';

// Data
import { products } from '../Data/products';
import { useLocation, useNavigate } from 'react-router-dom';
var SearchResults = ()=> {
    var tag="" 
    const location = useLocation()
    // const navigate = useNavigate()

    tag = location.state.tagid 


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
      "href":'/orders',
    }
  ]

  const dropdownname = 'Options' 
  
  /* DROP DOWN OPTIONS END */

  /* Make the search bar for the searching of products */
  

  const searchtitle = "Search"
  

  // Function to filter results 
    var newlist = products.filter((e)=>{
        if(!tag)
        {
            return true 
        }
      return e.category === tag 
    })

  return (
    <div className="App">
      <Navbar title="Shopping Site" searchbar={true} searchtitle={searchtitle} dropdown={true} dropdownoptions={dropdownoptions} dropdownname ={dropdownname}/>
      {/* {console.log(products)}  */}
      <div className="row">
        <h3>Search Results for {tag}  </h3>
        {console.log("newlist",newlist)}
      {
        newlist.length > 0 ? newlist.map(
          (e)=>{
            console.log(e)
            return (<ProductCard details = {e} />)
          }
        )
        : <div className='container'>No Items are Left To Show</div>
      }
      </div>
    </div>
  );
}

export default SearchResults;
