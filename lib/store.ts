import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  selectedConcern: string;
  searchQuery: string;
  recentInquiries: Array<{
    id: string;
    productTitle: string;
    submittedAt: string;
  }>;
}

const initialState: GlobalState = {
  selectedConcern: 'all',
  searchQuery: '',
  recentInquiries: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setSelectedConcern(state, action: PayloadAction<string>) {
      state.selectedConcern = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    addRecentInquiry(state, action: PayloadAction<{ id: string; productTitle: string }>) {
      state.recentInquiries.push({
        id: action.payload.id,
        productTitle: action.payload.productTitle,
        submittedAt: new Date().toISOString(),
      });
    },
  },
});

export const { setSelectedConcern, setSearchQuery, addRecentInquiry } = globalSlice.actions;

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
