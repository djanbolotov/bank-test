import { GET_BANKS_SUCCESS, GET_TRANSACTIONS_SUCCESS , DELETE_TRANSACTION} from "./action";

const initialState = {
    banks: [],
    transactions:[],
}

const reducer = (state = initialState, action ) =>{
    switch (action.type){
        case GET_BANKS_SUCCESS:
            let bank = Object.keys(action.banks).map(key => {
                return {
                  name: action.banks[key],
                  id: key,
                }
              });
            return {...state, banks:bank};
        case GET_TRANSACTIONS_SUCCESS:
                if(action.transactions !== null)
                {
                  let transact = Object.keys(action.transactions).map(key => {
                    return {
                      bank: action.transactions[key].bank,
                      amount: action.transactions[key].text,
                      id: key,
                    }
                  });
                return {...state, transactions:transact};
                }else{
                  return state;
                }
        case DELETE_TRANSACTION:
          return {
            ...state, 
            transactions: state.transactions.splice(action.id, 1)
          }

        default:
            return state;
    }

}

export default reducer;