import * as types from '../types'
import axios from 'axios';

export const fetchposts = () => async dispatch => {
	const res = await axios.get(`http://jsonplaceholder.typicode.com/posts`);
	dispatch({
		type: types.GET_POSTS,
		payload: res.data
	})
}