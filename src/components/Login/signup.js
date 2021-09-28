import React, {useState} from "react"
import { Formik } from "formik"
import TextField from "@material-ui/core/TextField"
import * as yup from "yup"
import "./login.css"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import { useLogin } from "../contexts/loginContext"
import { NavLink, useHistory } from "react-router-dom"
const SignUp = (props) => {
    const validationSchema = yup.object().shape({
        email: yup
          .string()
          .required("Обязательное поле")
          .email("Введите верный формат email"),
        password: yup
          .string()
          .required("Обязательное поле")
          .min(8, "Минимальное количество букв 8"),
        passwordConfirm: yup
          .string()
          .required("Обязательное поле")
          .min(8, "Минимальное количество букв 8"),
      })
      const [error, setError] = useState();
      const [loading, setLoading] = useState(false);
      const {SignUp} = useLogin()
      const history = useHistory()
    
       async function onSubmit(values) {
           if(values.password !== values.passwordConfirm)
           {
               setError("Пароли не совпадают")
           }else{
            try{
              setError("")
              setLoading(true)
              await SignUp(values.email, values.password)
              setLoading(false)
              history.push("/login")
             }catch{
               setError("Вы не правильно ввели данные")
             }
           }
           
        }

  return (
    <div className="login-body">
      <Card className="login-container">
        <Box>
          <h1 className="login-title">Зарегистрироватся </h1>
        </Box>
        <Formik
        initialValues = {{
          email: '',
          password: '',
          passwordConfirm: ''
        }}
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}
        >
           {({values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty,}) => 
           <form>
              <Box pt={2} pb={2}>
                <TextField value = {values.email} 
                           onChange={handleChange} onBlur={handleBlur} 
                           label = "Почта" name = "email" fullWidth variant = "outlined" margin="normal"/>
                {touched.email && errors.email && (<div className="inputError">{errors.email}</div>)}
                <TextField value = {values.password} 
                           onChange={handleChange} onBlur={handleBlur} 
                           type="password" label = "Пароль" name = "password" 
                           fullWidth variant = "outlined" margin = "normal"/>
                {touched.password && errors.password && (<div className="inputError">{errors.password}</div>)}
                <TextField value = {values.passwordConfirm} 
                           onChange={handleChange} onBlur={handleBlur} 
                           type="password" label = "Подтвердить пароль" name = "passwordConfirm" 
                           fullWidth variant = "outlined" margin = "normal"/>
                {touched.password && errors.password && (<div className="inputError">{errors.password}</div>)}
              </Box>
              <Box pb={2}>
                <Button  disabled={!isValid || !dirty} variant="contained" 
                        color="primary" type="submit" onClick={handleSubmit}>
                  {loading ? "Загрузка..." : "Зарегистрироватся"}
                </Button>
                <div className="auth-link">
                    <NavLink to="/login">Уже есть аккаунт?</NavLink>
                  </div>
                {error && (
                  <div className="login_error">
                    {error}
                  </div>)}
              </Box>
            </form>}
        </Formik>
      </Card>
    </div>
  )
}
export default SignUp