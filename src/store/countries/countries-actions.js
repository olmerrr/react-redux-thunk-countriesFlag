// constants
export const SET_COUNTRIES = "@@counties/SET_COUNTRIES";
export const SET_LOADING = "@@counties/SET_LOADING";
export const SET_ERROR = "@@counties/SET_ERROR";

//actions
export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries
});

export const setLoading = () => ({
  type: SET_LOADING
});
export const setError = (err) => ({
  type: SET_ERROR,
  payload: err
});

// thunk
export const loadCountries = () => (dispatch, _, {client, api}) => {
  dispatch(setLoading());
  client.get(api.ALL_COUNTRIES)
    .then(({data}) => dispatch(setCountries(data)))
    .catch((err) => dispatch(setError(err.message)));
}
