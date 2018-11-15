import { SELECT_POST } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case SELECT_POST:
			return {};
	}
	return state;
}
