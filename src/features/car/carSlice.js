import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cars: [
    {
      slug: 'model-s',
      name: 'Model S'
    }, 
    {
      slug: 'model-3',
      name: 'Model 3'
    },
    {
      slug: 'model-x',
      name: 'Model X'
    },
    {
      slug: 'model-s',
      name: 'Model S'
    }
  ]
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer