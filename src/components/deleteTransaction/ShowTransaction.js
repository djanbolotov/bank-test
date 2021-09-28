import React, {useEffect} from 'react'
import { getBanks, getTransaction, deleteTransaction } from '../../redux/action';
import ButtonAppBar from '../header/header'
import {useDispatch, useSelector} from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';



export default function ShowTransaction() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        {
          field: 'amount',
          headerName: 'Сумма',
          width: 150,
        },
        {
          field: 'bank',
          headerName: 'Банк',
          width: 250,
        },
        {
            field: 'delete',
            headerName: 'delete',
            width: 150
        }
      ];

    let rows = []
    const transactions = useSelector(state => state.transactions);
    const banks = useSelector(state => state.banks);
    rows = transactions.map((i, index) => {
        return {id: index, amount: i.amount, bank: banks[i.bank].name, delete: "Delete", custom: i.id};
    })
   
    const dispatch = useDispatch();
    function Delete(data) {
        dispatch(deleteTransaction(rows[data].custom))
         rows = transactions.map((i, index) => {
            return {id: index, amount: i.amount, bank: banks[i.bank].name, delete: "Delete", custom: i.id};
        })
    }

    useEffect(() => {
        dispatch(getTransaction());
        dispatch(getBanks());
    }, [dispatch, transactions])
    return (
        <div>
            <ButtonAppBar/>
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                disableColumnMenu
                onCellClick={(row) => Delete(row.id)}
            />
            </div>
        </div>
    )
}
