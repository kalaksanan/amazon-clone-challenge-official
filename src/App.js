import {useState, useEffect} from 'react'
import './App.css';
import Header from './Header.js'
import Cart from './Cart'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'
import { db, auth } from './Firebase'
import Login from './Login'



function App() {
  const [cartItems, setCartItems]= useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getCartItems = () => {
    db.collection('cartImage').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  console.log(cartItems);
  console.log(user);

  const signOut = () => {
    auth.signOut().then( () => {
      localStorage.removeItem('user');
      setUser(null)
    })
  }

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header 
              signOut={signOut}
              user={user} 
              cartItems={cartItems} />

            <Switch>

              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>

              <Route path="/">
                <Home />
              </Route>

            </Switch>
          </Container>
        )
      }

     
    </Router>
  );
}

export default App;


const Container = styled.div`
  background-color: #EAEDED;
  min-height: 1000px;
`


