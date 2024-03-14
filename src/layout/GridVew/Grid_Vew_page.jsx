import React, { useContext } from 'react'
import GridVew_Cart from './GridVew_Cart'
import ProductContext from '../../Context/ProductContext'
import List_Vew from './List_Vew'

const Grid_Vew_page = () => {

  const { Grid_Veiw } = useContext(ProductContext)
  // console.log(Grid_Veiw)
  if (Grid_Veiw == true) {
    return (
      <GridVew_Cart />
    )
  }
  if (Grid_Veiw == false) {
    return (
      <List_Vew />
    )
  }
}

export default Grid_Vew_page