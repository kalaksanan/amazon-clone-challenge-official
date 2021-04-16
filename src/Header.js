import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
    Link
} from "react-router-dom";


function Header({cartItems, user, signOut}) {

    const getCount = () => {
        let count = 0;
        console.log(cartItems);
        // loop through all items
        cartItems.forEach((item) => {
            //add the quantity of thecart to total
            count += item.product.quantity;
        })

        return count;

    }

    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={'https://i.imgur.com/7I9Was5.png'}/>
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo> Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                
                <HeaderOptionCart>
                        < ShoppingBasketIcon/>
                    <Link to="/Cart">
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>
                
            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height : 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:white;
`

const HeaderLogo = styled.div`
    img {
        width : 100px;
        //margin-left: 10px;
        display: flex
        align-items : center;
        padding-top:10px;
        padding-left: 10px;
    }
`
const HeaderOptionAddress = styled.div`
    //margin-left: -20px;
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
    font-weight : 700;
`
const HeaderSearch = styled.div`
    display: flex;
    //margin-left: -20px;
    height: 40px;
    flex-grow: 0.8;
    overflow: hidden;
    border-radius: 5px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #f90;
    }
`
const HeaderSearchInput = styled.input`
    flex-grow: 1 ;
    border: 0;
    :focus {
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 0 5px 5px 0;
`
const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;    
`
const HeaderOption = styled.div`
    padding: 10px 10px;
    font-size: 0.8em;
    cursor: pointer;
`
const HeaderNavItems = styled.div`
    display:flex;
    //margin-left: -20px;
`
const CartCount = styled.div`
    padding: 0 10px;
    font-weight: 700;
    color: #f08804;
`


