// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import { db } from "../../firebaseConfig";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Swal from "sweetalert2";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import Modal from '@mui/material/Modal';
// import AddContainers from './AddContaniers';
// import EditContainers from './EditContainers';
// import { useAppStore } from '../../appStore';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };

// export default function ContainerList() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const empCollectionRef = collection(db, "containers");
//   const [open, setOpen] = useState(false);
//   const [editopen, setEditOpen] = useState(false);
//   const [formid, setFormid] = useState({});
//   const setRows = useAppStore((state)=>state.setRows);
//   const rows = useAppStore((state)=>state.rows);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handleEditOpen = () => setEditOpen(true);
//   const handleEditClose = () => setEditOpen(false);

//   useEffect(() => {
//     getContainers();
//   }, []);

//   const getContainers = async () => {
//     setRows([]);
//     const data = await getDocs(empCollectionRef);
//     setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

//   const deleteUser = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.value) {
//         deleteApi(id);
//       }
//     });
//   };

//   const deleteApi = async (id) => {
//     const userDoc = doc(db, "containers", id);
//     await deleteDoc(userDoc);
//     Swal.fire("Deleted!", "Your container has been deleted.", "success");
//     getContainers();
//   };

//   const filterData = (v) => {
//     if (v) {
//       setRows([v]);
//     } else {
//         setRows([]);
//       getContainers();
//     }
//   };

//   const editData = (id, containerID, tagID, size, inDate) => {
//     const data = {
//       id:id,
//       containerID:containerID,
//       tagID:tagID,
//       size:size,
//       inDate:inDate
//     }
//     setFormid(data);
//     handleEditOpen();
//   }

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <>
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//         <AddContainers closeEvent={handleClose} />
//         </Box>
//       </Modal>
//       <Modal
//         open={editopen}
//         onClose={handleEditClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//         <EditContainers closeEvent={handleEditClose} fid={formid} />
//         </Box>
//       </Modal>
//     </div>
//     <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
//         <Typography
//             gutterBottom
//             variant="h5"
//             component="div"
//             sx={{ padding: "20px" }}
//           >
//             Container List
//           </Typography>
//           <Divider />
//           <Box height={10} />
//           <Stack direction="row" spacing={2} className="my-2 mb-2">
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={rows}
//               sx={{ width: 300 }}
//               onChange={(e, v) => filterData(v)}
//               getOptionLabel={(rows) => rows.contanierID || ""}
//               renderInput={(params) => (
//                 <TextField {...params} size="small" label="Search Containers" />
//               )}
//             />
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{ flexGrow: 1 }}
//             ></Typography>
//             <Button variant="contained" endIcon={<AddCircleIcon />} onClick={()=>{handleOpen()}}>
//               Add
//             </Button>
//           </Stack>
//           <Box height={10} />
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//                 <TableCell
//                   align="left"
//                   style={{ minWidth: "100px" }}
//                 >
//                   Container-ID
//                 </TableCell>
//                 <TableCell
//                   align="left"
//                   style={{ minWidth: "100px" }}
//                 >
//                   Tag-ID
//                 </TableCell>
//                 <TableCell
//                   align="left"
//                   style={{ minWidth: "100px" }}
//                 >
//                   In-Date
//                 </TableCell>
//                 <TableCell
//                   align="left"
//                   style={{ minWidth: "100px" }}
//                 >
//                   Dropp-off-time
//                 </TableCell>
//                 <TableCell
//                   align="left"
//                   style={{ minWidth: "100px" }}
//                 >
//                   Size
//                 </TableCell>
//                 <TableCell
//                   align="left"
//                   style={{ minWidth: "100px" }}
//                 >
//                   Action
//                 </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} >
                      
//                         <TableCell key={row.id} align="left">
//                           {row.contanierID}
//                         </TableCell>

//                         <TableCell key={row.id} align="left">
//                           {row.tagID}
//                         </TableCell>
//                         <TableCell key={row.id} align="left">
//                           10-8-2023
//                         </TableCell>
//                         <TableCell key={row.id} align="left">
//                         10-8-2023
//                         </TableCell>
//                         <TableCell key={row.id} align="left">
//                           {row.size}
//                         </TableCell>

//                         <TableCell align="left">
//                           <Stack spacing={2} direction="row">
//                             <EditIcon
//                               style={{
//                                 fontSize: "20px",
//                                 color: "blue",
//                                 cursor: "pointer",
//                               }}
//                               className="cursor-pointer"
//                               // onClick={() => editUser(row.id)}
//                               onClick={()=>{
//                                 editData(row.id, row.contanierID, row.tagID, row.size, row.inDate);
//                               }}
//                             />
//                             <DeleteIcon
//                               style={{
//                                 fontSize: "20px",
//                                 color: "darkred",
//                                 cursor: "pointer",
//                               }}
//                               onClick={() => {
//                                 deleteUser(row.id);
//                               }}
//                             />
//                           </Stack>
//                         </TableCell> 
                      
//                   </TableRow>
//                   );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//     </>
//   );
// }
import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import AddContainers from './AddContaniers';
import EditContainers from './EditContainers';
import { useAppStore } from '../../appStore';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function ContainerList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const empCollectionRef = collection(db, "containers");
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState({});
  const setRows = useAppStore((state)=>state.setRows);
  const rows = useAppStore((state)=>state.rows);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  useEffect(() => {
    getContainers();
  }, []);

  const getContainers = async () => {
    setRows([]);
    // const data = await getDocs(empCollectionRef);
    // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    try {
      const res = await axios.get("http://localhost:5000/getContainers")
      setRows(res.data)
    } catch(err) {
      console.log(err); 
    }
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    // const userDoc = doc(db, "containers", id);
    // await deleteDoc(userDoc);

    try {
      await axios.delete("http://localhost:5000/deleteContainer/"+id);
    } catch(err) {
      console.log(err);
    }
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getContainers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
        setRows([]);
      getContainers();
    }
  };

  const editData = async (container_id, tag_id, size, in_date,lat, lng, last_dropoff_time ) => {
    const data = {
      container_id:container_id,
      tag_id:tag_id,
      size:size,
      in_date:in_date,
      lat:lat,
      lng:lng,
      last_dropoff_time:last_dropoff_time
    }
    setFormid(data);
    handleEditOpen();
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <AddContainers closeEvent={handleClose} />
        </Box>
      </Modal>
      <Modal
        open={editopen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <EditContainers closeEvent={handleEditClose} fid={formid} />
        </Box>
      </Modal>
    </div>
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
        <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Container List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.container_id || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Containers" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" endIcon={<AddCircleIcon />} onClick={()=>{handleOpen()}}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Container-ID
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Tag-ID
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  In-Date
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Dropp-off-time
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Size
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                      
                        <TableCell key={row.container_id} align="left">
                          {row.container_id}
                        </TableCell>

                        <TableCell key={row.container_id} align="left">
                          {row.tag_id}
                        </TableCell>
                        <TableCell key={row.container_id} align="left">
                          {row.in_date}
                        </TableCell>
                        <TableCell key={row.container_id} align="left">
                        {row.last_dropoff_time}
                        </TableCell>
                        <TableCell key={row.container_id} align="left">
                          {row.size}
                        </TableCell>

                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              // onClick={() => editUser(row.id)}
                              onClick={()=>{
                                editData(row.container_id, row.tag_id, row.size, row.in_date,row.lat, row.lng, row.last_dropoff_time);
                              }}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.container_id);
                              }}
                            />
                          </Stack>
                        </TableCell> 
                      
                  </TableRow>
                  );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}