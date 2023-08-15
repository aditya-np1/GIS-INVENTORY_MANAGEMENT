import React from 'react';
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
import { useMemo } from 'react';
import Map from './Map';

export default function Home() {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        {/* <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction='row'>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <AddCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                $<CountUp start={0} end={500} delay={0.4} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientLight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                $<CountUp start={0} end={900} delay={0.4} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ minWidth: 49 + "%" }} className='gradientLight'>
                                        <div className='paddingall'>
                                            <span className='containertitle'><CountUp start={0} end={32000} delay={0.4} duration={0.6} /></span>
                                            <br />
                                            <span className='containersubtitle'>containers</span>
                                        </div>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%" }}>
                                        <div className='paddingall'>
                                            <span className='containertitle'><CountUp start={0} end={34000} delay={0.4} duration={0.6} /></span>
                                            <br />
                                            <span className='containersubtitle'>containers</span>
                                        </div>
                                    </Card>
                                </Stack>
                            </Grid>
                            </Grid> */}
                        {/* <Box height={20} /> */}
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ height: 79 + "vh" }}>
                                    <CardContent>
                                        <Map />
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                
                                    <CardContent>
                                        <div className='paddingall'>
                                            <span className='containertitle'>Recent Movements</span>
                                        </div>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography>Contanier ID</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>Contanier ID</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>Contanier ID</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>


                                    </CardContent>
                                </Card>
                            </Grid> */}
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}
