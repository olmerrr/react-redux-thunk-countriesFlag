// constants
import {filterByCode} from "../../config";

export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBOURS = "@@details/SET_NEIGHBOURS";
// actions
const setLoading = () => ({
  type: SET_LOADING
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS
})
const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country
});

const setNeighbours = (countries) => ({
  type: SET_NEIGHBOURS,
  payload: countries
});


// thunk
// client - axios
export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
  dispatch(setLoading());
  client.get(api.searchByCountry(name))
    .then(({data}) => dispatch(setCountry(data[0])))
    .catch((err) => dispatch(setError(err.message)))
};

export const loadNeighboursByBorder = (borders) => (dispatch, _, {client, api}) => {
  client.get(api.filterByCode(borders))
    .then(({data}) => dispatch(setNeighbours(data.map(country => country.name))))
    .catch(console.error);
};