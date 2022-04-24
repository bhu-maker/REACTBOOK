import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import {useState} from 'react';
import {listing} from './Api';

export const Home=()=>{
    const[bok,bokfn]=useState([])
    useEffect(()=>{hey()},[])
    const hey=async()=>{
        const t = await listing()
        bokfn(t.data)
    }
    return(
        <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='table-responsive md'>
                <div className="col-lg-10 col-md-8 col-sm-12 shadow p-4 rounded-3">
                    <TableContainer component={Paper}>
                    <Table >
                        <TableHead className="bg-danger">
                        <TableRow>
                            <TableCell align="center">Book Title </TableCell>
                            <TableCell align="center">Book Author</TableCell>
                            <TableCell align="center">Book Price</TableCell>
                            <TableCell align="center">Page Content</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody className='bg-secondary'>
                        {bok.map((row) => (
                            <TableRow>
                            <TableCell align="center">{row.title}</TableCell>
                            <TableCell align="center">{row.author}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.pages}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
                    </div>
                    </div>
                    </div>


        </>

    )
}