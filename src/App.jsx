import React, {useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';

import {MainContainer, WishItemsContainer, Title, WishItemContainer, Input, AddButton, SubmitButton} from './styles/WishListContainerStyle'

const App = () => {
  return (
    <div className="App">
      <WishListContainer />
    </div>
  )
}

//! Main Container !//
const WishListContainer = () => {
  const [userInput, setUserInput] = useState('')
  // allows use of actions
  const dispatch = useDispatch()
  // grabs state
  const wishListArray = useSelector(state => state.wishList)

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  const handleAddClick = () => {
    // if user input is empty alert for them to type in a wish
    if (userInput === '') alert('Please type in a wish for Santa!')
    // while iterating through state, if it includes the user input then alert that it has already been included 
    if (wishListArray.includes(userInput)) {
      setUserInput('')
      return alert('You already have this item in your wish list')
      }
    // when user clicks add to add onto their wish list, this will grab the userInput as the payload
    dispatch(addItem(userInput))
    setUserInput('')
  }

  return (
    <MainContainer>
      <Title>MY WISHLIST</Title>
      <WishListItem />
      <Input type="text" value={userInput} onChange={handleUserInput}></Input>
      <AddButton onClick={handleAddClick}>Add</AddButton>
      <SubmitButton onClick={() => {
        // if user tries to submit an empty wish lilst alert them that it is empty
        if (wishListArray.length === 0) return alert('Your wish list is empty, please enter in what you want for Christmas!')
        alert('Wish list submitted to Santa!')
        // using default case to return wish list to empty when submitted
        dispatch({type: ''})
        }}>Submit</SubmitButton>
    </MainContainer>
  )
}

//! Individual Items on Wish List !//
const WishListItem = () => {
  // grabs state
  const wishListArray = useSelector(state => state.wishList)
  // allows use of actions
  const dispatch = useDispatch()

  // for the item that the user clicks on, this was grab its index as the payload
  const handleDeleteClick = (index) => {
    dispatch(deleteItem(index))
  }

  return (
    // mapping through state to return each individual item that includes index for delete action
    <WishItemsContainer>
      {wishListArray.map((item, index) => {
        return <WishItemContainer onClick={() => {handleDeleteClick(index)}} key={index}>{item}</WishItemContainer>
      })}
    </WishItemsContainer>
  )
}

export default App
