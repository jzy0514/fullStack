const { combineReducers } = require('redux');
const filmReducer = require('./FilmReducer.js');
const filmFilterReducer = require('./filmFilter.js')
module.exports = combineReducers({
  films: filmReducer,
  filter: filmFilterReducer
})