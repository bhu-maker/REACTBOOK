import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import {useState} from 'react'


import '..//node_modules/bootstrap/dist/css/bootstrap.min.css'
import { newforming } from './Api';
export const Newform=()=>{
    const[book,bokfn]=useState({
        "title":"",
        "author":"",
        "price":0.0,
        "pages":0
    })
    const submitting=async()=>{
        const temp=await newforming(book)
        alert(JSON.stringify(temp.data))
        resetting()
    }
    const resetting=()=>{
        bokfn(()=>{
            return{
                "title":"",
                "author":"",
                "price":0.0,
                "pages":0
            }
        })
    }
    const calling=(obj)=>{
        const{name,value}=obj.target
        bokfn((oldobj)=>{
            return{
                ...oldobj,
                [name]:value  
            }        
        })
    }
    return(
        <>
        <div className="container-fluid">
            <div className="row justify-content-center">
                 <div className="col-lg-7 col-md-8 col-sm-12 bg-warning shadow rounded-3 mt-4">
                        <TextField
                        required
                        id="standard-required"
                        label="title"
                        defaultValue=""
                        variant="standard"
                        name="title"
                        className="form-control bg-warning mb-3 mt-3"
                        values={book.title}
                        onChange={calling}
                        />
                        <TextField
                        required
                        id="standard-required"
                        label="author"
                        defaultValue=""
                        variant="standard"
                        name="author"
                        className="form-control bg-warning mb-3 "
                        values={book.author}
                        onChange={calling}

                        />
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Price</InputLabel>
                        <FilledInput
                            id="filled-adornment-amount"
                            name='price'
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            className="mb-3"
                            values={book.price}
                            onChange={calling}

                        />
                        </FormControl>
                        <TextField
                        label="pages"
                        id="filled-size-normal"
                        defaultValue=""
                        variant="filled"
                        name="pages"
                        className="form-controlbg-warning mb-5 "
                        values={book.pages}
                        onChange={calling}

                        />

                   <div className='row justify-content-around mb-3'>     
                   <Button variant="contained" onClick={submitting} className="col-3 " color="success">Agree</Button>
                   <Button variant="contained" onClick={resetting} className="col-3" color="error">Reset</Button>
                       </div>
        </div>
        </div>
        </div>
        </>

    )
}