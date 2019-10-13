const defaultData = {
  count: 0
}

const data = (state = defaultData, action) => {

  switch (action.type) {
    case 'UPDATE':
      return { ...state,
				count: action.payload,
      };
    default:
      return state
  }
}

export default data