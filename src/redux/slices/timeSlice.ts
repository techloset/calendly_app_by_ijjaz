import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimeState {
  selectedTime: string;
  value: Date;
}

const initialState: TimeState = {
  selectedTime: '',
  value: new Date(),
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setSelectedTime: (state, action: PayloadAction<string>) => {
      state.selectedTime = action.payload;
    },
    setValue: (state, action: PayloadAction<Date>) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedTime, setValue } = timeSlice.actions;

export default timeSlice.reducer;
