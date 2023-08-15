// import React, { useEffect, useState } from 'react'
// import { db } from "../../firebaseConfig";
// import {
//     collection,
//     getDocs,
//     doc,
// } from "firebase/firestore";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// export default function Movement() {
//     const [rows, setRows] = useState([]);
//     const movementCollectionRef = collection(db, "movements");

//     useEffect(() => {
//         getMovements();
//     }, []);

//     const getMovements = async () => {
//         setRows([]);
//         const data = await getDocs(movementCollectionRef);
//         setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     return (
//         <Card sx={{ height: 60 + "vh" }}>
//             <CardContent>
//                 <div className='paddingall'>
//                     <span className='containertitle'>Recent Movements</span>
//                 </div>
//                 {
//                     rows.map((row) => {
//                         return (
//                         <Accordion>
//                             <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls="panel1a-content"
//                                 id="panel1a-header"
//                             >
//                                 <Typography>{row.containerID} - {row.pickUpTime}</Typography>
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 <Typography>
//                                     From: {JSON.stringify(row.fromLocation)} <br/> To: {JSON.stringify(row.toLocation)}
//                                 </Typography>
//                             </AccordionDetails>
//                         </Accordion>
//                         )
//                     })
//                 }
//             </CardContent>
//         </Card>
//     )
// }
import React, { useEffect, useState } from 'react'
import { db } from "../../firebaseConfig";
import {
    collection,
    getDocs,
    doc,
} from "firebase/firestore";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Movement() {
    const [rows, setRows] = useState([]);
    const movementCollectionRef = collection(db, "movements");

    useEffect(() => {
        getMovements();
    }, []);

    const getMovements = async () => {
        setRows([]);
        // const data = await getDocs(movementCollectionRef);
        // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        try {
            const res = await axios.get("http://localhost:5000/getMovements")
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Card sx={{ height: 60 + "vh" }}>
            <CardContent>
                <div className='paddingall'>
                    <span className='containertitle'>Recent Movements</span>
                </div>
                {
                    rows.map((row) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{row.containerID} - {row.pickUpTime}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        From: {JSON.stringify(row.fromLocation)} <br /> To: {JSON.stringify(row.toLocation)}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </CardContent>
        </Card>
    )
}
