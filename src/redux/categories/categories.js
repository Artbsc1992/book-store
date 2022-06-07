const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const reducer = (state = [], action) => {
  switch (action.type){
    case CHECK_STATUS:
      return 'Under Construction'
    default:
      return state
  }
}

export default reducer
export { checkStatus }