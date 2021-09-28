import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink , useHistory} from "react-router-dom"
import {useLogin} from './../contexts/loginContext';

export default function ButtonAppBar() {
  const {logOut} = useLogin();
  const history = useHistory();
  const handleSubmit = () =>{
      logOut();
      history.push('/login');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              <NavLink style={{ textDecoration: 'none' }} to="/">
                Добавить транзакцию
              </NavLink>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink style={{ textDecoration: 'none' }} to="/showtransactions">
                Транзакции
              </NavLink>
          </Typography>
          <Button onClick={handleSubmit} color="inherit">Выйти</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
