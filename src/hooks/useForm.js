import { useState } from "react";

const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)
    const [password, setPassword] = useState('')

    const onChange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const onChangeName = (event) => {
        const value = event.target.value

        if(value.length === 1 || value.length < 10){
            setForm({...form, name: {value, error: 'O nome deve conter no mínimo 10 caracteres'} })
            if(value.length === 0){
                setForm({...form, name: {value, error: ''} })

            }
         
        } 
        else {
            setForm({...form, name: {value}})
        }
    }


    const onChangePassword = (event) => {
        const value = event.target.value
        
        setPassword(value)
        
        if(value.length === 1 || value.length < 8) {
             setForm({...form, password: {value, error: 'O nome deve conter no mínimo 8 caracteres'} })
             if(value.length === 0){
                setForm({...form, password: {value, error: ''} })
            }
        } else {
            setForm({...form, password: {value}})
        }
    
        
    }

    const onChangeConfirmPassword = (event) =>{
        const value = event.target.value

        if(value !== password){
            setForm({...form, confirmPassword: {value, error: 'A senhas não são iguais.'} })
        } else {
            setForm({...form, confirmPassword: {value}})
        }
    }

 


    const clean = () => {
        setForm(initialState)
    }

    return {form, onChange, onChangeName, onChangePassword, onChangeConfirmPassword, clean}

}

export default useForm