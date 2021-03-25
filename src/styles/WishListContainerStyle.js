import styled from 'styled-components'

export const MainContainer = styled.div`
  background: #e7cec8;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px #6a737d;
  height: 540px;
  margin: 30px auto 0 auto;
  padding: 20px 10px 40px 10px;
  text-align: center;
  width: 400px;
`

export const WishItemsContainer = styled.div`
  background: #fff;
  border: 3px solid gray;
  border-radius: 5px;
  height: 240px;
  margin: 30px;
`

export const Title = styled.h1`
  font-size: 30px;
`

export const WishItemContainer = styled.div`
  padding: 10px 0px 0px 15px;
  text-align: left;
`

export const Input = styled.input`
  border: 3px solid gray;
  border-radius: 5px;
  margin: auto;
  padding: 12px 12px;
  width: 315px;
  :focus {
    outline: none;
    border: 3px solid #add8e6
    };
`

export const AddButton = styled.button`
  background-color: #7df57f;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: .25px .25px .25px .25px grey;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 150px;
  :focus {
    outline: none;
    box-shadow: none;
  }
`

export const SubmitButton = styled.button`
  background-color: #7df57f;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: .25px .25px .25px .25px grey;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin: auto;
  width: 350px;
  :focus {
    outline: none;
    box-shadow: none;
  }
`


