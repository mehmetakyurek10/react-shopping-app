import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  selectedCategory: "all"
}


export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    handleSetCategory:((state,action) => {
        state.selectedCategory = action.payload
    })
  },
})


export const { handleSetCategory } = categorySlice.actions
export default categorySlice.reducer