import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CountUp from 'react-countup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BarChart from '../charts/BarChart';
import HorizontalBarChart from '../charts/HorizontalBarChart';
import PieChart from '../charts/PieChart';


export default function Reports() {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack spacing={2}>
                                    <Stack spacing={2} direction='row'>
                                        <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                            <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffff" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    <CountUp start={0} end={500} delay={0.4} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Science Last Update
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientLight'>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffff" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    <CountUp start={0} end={500} delay={0.4} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Science Last Update
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                    <Stack spacing={2} direction='row'>
                                        <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffff" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    <CountUp start={0} end={500} delay={0.4} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Science Last Update
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientLight'>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffff" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                    <CountUp start={0} end={500} delay={0.4} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Science Last Update
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Stack>
                            </Grid>

                            <Grid item xs={7}>
                                <Card sx={{ minWidth: 49 + "%", height: 315 }}>
                                    <CardContent>
                                        <HorizontalBarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 50 + "vh" }}>
                                    <CardContent>
                                        <BarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 50 + "vh" }}>
                                    <CardContent>
                                        <PieChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}
