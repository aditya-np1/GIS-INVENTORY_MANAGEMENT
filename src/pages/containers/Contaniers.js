import React from 'react'
import Sidenav from '../../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar';
import ContainerList from './ContainerList';

export default function Containers() {
    return (
        <>
        <Navbar />
        <div className='bgcolor'>
        <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <ContainerList />
                </Box>
            </Box>
            </div>
        </>
    )
}

