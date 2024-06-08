import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SpaceData } from '../../interfaces/spaceListInterface';

export interface SpaceListState {
  loading: boolean;
  data: SpaceData[] | [];
}

const initialState: SpaceListState = {
  loading: false,
  data: [],
};

export const Spacelist = createSlice({
  name: 'deal',
  initialState,
  reducers: {
    spacelistRequest(state: SpaceListState) {
      state.loading = true;
    },
    spacelistSuccess: (
      state: SpaceListState,
      { payload }: PayloadAction<SpaceData[]>,
    ) => {
      state.loading = false;
      state.data = payload;
    },
    spacelistError: (
      state: SpaceListState,
    ) => {
      state.loading = false;
    },
   
  },
});

// Actions
export const {
    spacelistRequest,
    spacelistSuccess,
    spacelistError,
} = Spacelist.actions;

// Reducer
export default Spacelist.reducer;