//state argument is not app state, only what this reducer is responsible for.
//redux does not like undefinend, set initial state to null
export default function(state = null, action){
  switch(action.type){
    case 'USER_SELECTED':
      return action.payload;
    }

  return state
}
