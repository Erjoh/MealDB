import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v2/1/randomselection.php');

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.meals;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getSearch = createAsyncThunk(
    'search/getSearch',
    async function (name, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.meals;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getLookup = createAsyncThunk(
    'lookup/getLookup',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.meals[0];

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getIngredient = createAsyncThunk(
    'ingredient/getIngredient',
    async function (name, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.meals;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getSeaFood = createAsyncThunk(
    'seafood/getSeaFood',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.meals;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getCategory = createAsyncThunk(
    'categories/getCategory',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.categories;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getCategoryList = createAsyncThunk(
    'categoriesList/getCategoryList',
    async function (categoryName, {rejectWithValue}) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data.meals;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        search: [],
        lookup: [],
        ingredient: [],
        seafood: [],
        categories: [],
        categoryList: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getMeals.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getMeals.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.meals = action.payload;
        },
        [getMeals.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getSearch.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getSearch.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.search = action.payload;
        },
        [getSearch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getLookup.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getLookup.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.lookup = action.payload;
        },
        [getLookup.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getIngredient.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getIngredient.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.ingredient = action.payload;
        },
        [getIngredient.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getSeaFood.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getSeaFood.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.seafood = action.payload;
        },
        [getSeaFood.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getCategory.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCategory.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.categories = action.payload;
        },
        [getCategory.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getCategoryList.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getCategoryList.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.categoryList = action.payload;
        },
        [getCategoryList.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const {} = mealSlice.actions;

export default mealSlice.reducer