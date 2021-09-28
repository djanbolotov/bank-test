import point from '../point';

export const GET_BANKS_START = 'GET_BANKS_START';
export const GET_BANKS_SUCCESS = 'GET_BANKS_SUCCESS';
export const NEWTRANSACTION = 'NEWTRANSACTION';
export const GET_TRANSACTIONS_START = 'GET_TRANSACTIONS_START';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const getbankstart = () =>({type:GET_BANKS_START})
export const getbanksuccess = (banks) =>({type:GET_BANKS_SUCCESS, banks})
export const posttransaction = (transaction) => ({type:NEWTRANSACTION, transaction })
export const gettransactionstart = () =>({type:GET_TRANSACTIONS_START})
export const gettransactionsuccess = (transactions) =>({type:GET_TRANSACTIONS_SUCCESS, transactions})
export const deletetransaction = (id) => ({type:DELETE_TRANSACTION, id})

export const deleteTransaction = (id) =>{
    return async dispatch => {
        await point.delete('/Transaction/' + id + '.json', {id});
        dispatch(deleteTransaction(id))
    }
}

export const getTransaction = () =>{
    return async dispatch => {
        dispatch(gettransactionstart());
        const responce = await point.get('/Transaction.json')
        dispatch(gettransactionsuccess(responce.data))
    }
}

export const setTransaction = (transaction) =>{
    return async dispatch => {
        await point.post('/Transaction.json', transaction)
        .then(dispatch(posttransaction(transaction)))
    }
}
export const getBanks = () =>{
    return async dispatch =>{
        dispatch(getbankstart());
        const responce = await point.get('/List.json');
        dispatch(getbanksuccess(responce.data));
    }
}