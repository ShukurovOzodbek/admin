import { EditNotifications } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {

    useEffect(() => {
        let btn = document.querySelectorAll('#btn')

        btn.forEach((elem) => {
            elem.onclick = () => {
                btn.forEach(element => {
                    element.classList.remove('active')
                });
                elem.classList.add('active')
            }
        })
    })
    const len = useSelector(state => state.products.data) 
    console.log(len);
    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Stack sx={{ background: '#F1F1F1', width: '20%', height: '100%', padding: '15px', gap: '80px' }}>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                    <Box sx={{ width: '55px', height: '55px', background: 'blue', borderRadius: '1000px' }}></Box>
                    <Typography variant={'h4'}>Company</Typography>
                </Stack>
                <Stack sx={{ gap: '10px' }} >
                    <Link to={'/add'}><Button className='active' id="btn" sx={{ display: 'flex', justifyContent: 'flex-start', width: '170px' }} > <AddIcon /> Add Product</Button></Link>
                    <Link to={'/delete'}><Button id="btn" sx={{ display: 'flex', justifyContent: 'flex-start', width: '170px' }} ><DeleteForeverIcon /> Delete Product</Button></Link>
                    <Link to={'/edit'}><Button id="btn" sx={{ display: 'flex', justifyContent: 'flex-start', width: '170px' }}> <EditNotifications /> Edit Product</Button></Link>
                </Stack>
                <Box>

                </Box>
            </Stack>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%'}}>
                <header style={{ margin: '0 auto', textAlign: "center", marginBottom: '120px'}}>
                    <h1>{len.length}</h1>
                    <h1>Товаров</h1>
                </header>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
