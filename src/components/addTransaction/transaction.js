import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import ButtonAppBar from '../header/header'
import TextField from "@material-ui/core/TextField"
import { getBanks, setTransaction } from '../../redux/action';
import Button from "@material-ui/core/Button"
import './transaction.css'


export default function Transaction() {
    const [error, setError] = useState();
    const [text, setText] = useState("");
    const [bank, setBank] = useState();
    const banks = useSelector(state => state.banks);
    const dispatch = useDispatch();

    function  handleSubmit(data) {
        if(data.bank === "" || data.text === "")
        {
            setError("Please fill the values!") 
        }else{
            setError("")
            dispatch(setTransaction(data))
            setError("Отправлено!!!")
        }
    }
    useEffect(() => {
        if(text !== "" && bank !== "")
        {
            setError("")
        }
        dispatch(getBanks());
    }, [dispatch, text, bank])
    return (
        <div>      
            <ButtonAppBar/>
            <div className="outlined">
                <div className="sendForm">
                    <TextField onChange={(e)=>{setText(e.target.value)}} label="Введите сумму" variant = "outlined"/>
                    <div>
                        <span>{text? "Сумма: " + text: ""}</span>
                    </div>
                    <div>
                        {error && (
                    <div className="login_error">
                        {error}
                    </div>)}
                    </div>
                    <div>
                        <span>{bank?  "Банк: " + bank.name: ""} </span>
                    </div>
                    <Button onClick={() => handleSubmit({text, bank: bank? bank.id : ""})} variant="contained" 
                        color="primary" type="submit">
                        Отправить
                    </Button>
                </div>
                <div>
                    <h3>Выберите банк</h3>
                    {banks.map((i) => {
                        return <div onClick={()=>setBank(i)} className="banks" key = {i.id}><span>{i.name}</span></div>
                    })}
                </div>
            </div>
        </div>
    )
}
