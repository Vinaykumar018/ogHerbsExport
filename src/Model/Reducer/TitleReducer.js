import { createSlice } from '@reduxjs/toolkit'

// Initial state with titles for different pages
const initialState = {
  titles: {
    home: 'Home,/',
    about: 'About,about',
    contact: 'Contact,contact',
    food: 'Food',
    quantity:"Quantity",
   fruits:"Dry Fruits & Nuts",
   spices:"Spices",
   pulses:"Pulses",
   seeds:"Grains & Seeds,grains-seeds",
   quality:"Quality,quality",
   rice:"rice"
  },
}

export const counterSlice = createSlice({
  name: 'titles',
  initialState,
  reducers: {
    // Action to set a specific title
    setTitle: (state, action) => {
      const { page, title } = action.payload; // Destructuring page and title from the action payload
      if (state.titles[page]) { // Check if the page exists
        state.titles[page] = title; // Update the title for the specific page
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTitle } = counterSlice.actions

// Selector to retrieve a particular title
export const selectTitle = (state, page) => state.titles.titles[page]; // Selector to get title by page

export default counterSlice.reducer
