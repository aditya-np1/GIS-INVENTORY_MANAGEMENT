// const express = require("express")
// const cors = require("cors");
// const mysql = require('mysql2');
// const fs = require('fs');
// const app = express();
// const PORT = process.env.PORT || 5000;


// app.use(Express.json());
// app.use(cors());

// const db = mysql.createConnection({
//     host: 'localhost', // Replace with your database host
//     user: 'root', // Replace with your database username
//     password: 'mahantswami1933', // Replace with your database password
//     database: 'gis' // Replace with your database name
// });

// // Connect to the database
// db.connect(err => {
//     if (err) {
//         console.error('Database connection failed:', err);
//     } else {
//         console.log('Connected to the database');
//     }
// });


// // add multiple records in mysql
// const addMultiple = async () => {
//     try {
//         const rawData = fs.readFileSync('grid.json');
//     const data = JSON.parse(rawData);
//     for (const feature of data.features) {
//         const id = feature.properties.id;
//         const area_id=1;
//         const coordinates = feature.geometry.coordinates;
//         const coordinatesJson = {
//             "coordinates": coordinates[0]
//           };
//         const no_of_container = 0;
//         const clen = stack.length;
  
//         db.query(
//             `INSERT INTO grid (area_id, coordinates, no_of_container) VALUES (?, ?, ?)`,
//             [area_id, JSON.stringify(coordinatesJson), no_of_container],
//             (err, res) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log('Data inserted successfully');
//               }
//             }
//           );
          
//       }
//       console.log('Data inserted successfully');
//     } catch (error) {
//       console.error('Error inserting data:', error);
//     }
// }

// // list container data
// const container_list = ()=> {
//     app.get("/getContainers", (req, res)=> {
//     const query = "SELECT * FROM containers";
//     db.query(query, (err, result) => {
//         if (err) {
//             console.error('Error: ', err);
//             return res.status(500).json(err);
//         }
//         console.log('Data:', result);
//         return res.status(200).json(result);
//     });
//   })
// }  
// // add container
// const addcontainer = () => {
//     app.post("/addContainers", (req, res)=> {
//     const query = 'INSERT INTO containers (`container_id`, `tag_id`,`grid_id`,`status`,`size`,`lat`,`lng`,`alt`,`in_date` ,`last_dropoff_time` ) VALUES (?)';
//     const values = [
//         req.body.container_id,
//         req.body.tag_id,
//         req.body.grid_id,
//         req.body.status,
//         req.body.size,
//         req.body.lat,
//         req.body.lng,
//         req.body.alt,
//         req.body.in_date,
//         req.body.last_dropoff_time
//     ]
//     console.log(req.body)
//     db.query(query, [values], (err, result) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Data inserted:', result);
//         return res.status(200).json({ message: 'Data inserted successfully' });
//     });
//   })
// }

// // add rfid
// const rfid = () => {
//     app.post("/addRfid", (req, res)=> {
//     const query = 'INSERT INTO rfids (`value`,`status`,`timereused`,`activation_time`,`last_allocation_time`) VALUES (?)';
//     const values = [
//         req.body.value,
//         req.body.status,
//         req.body.timereused,
//         req.body.activation_time,
//         req.body.last_allocation_time,
//     ]
//     console.log(req.body)
//     db.query(query, [values], (err, result) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Data inserted:', result);
//         return res.status(200).json({ message: 'Data inserted successfully' });
//     });
//   })
// }
// //when any movements, insert that into movement table 
// const addmovement = () =>{
//     app.post("/addmovement", (req,res)=>{
//         const query = 'INSERT INTO movements (`container_id`,`pick_up_lat`,`pick_up_lng`,`pick_up_alt`,`drop_off_lat`,`drop_off_lng`,`drop_off_alt`,`pick_up_time`,`drop_off_time`) VALUES (?)';
//         const values = [
//             res.body.container_id,
//             res.body.pick_up_lat,
//             res.body.pick_up_lng,
//             res.body.pick_up_alt,
//             res.body.drop_off_lat,
//             res.body.drop_off_lng,
//             res.body.drop_off_alt,
//             res.body.pick_up_time,
//             res.body.drop_off_time
//         ]
//         console.log(req.body)
//         db.query(query, [values], (err, result) => {
//             if (err) {
//                 console.error('Error inserting data:', err);
//                 return res.status(500).json({ error: 'Internal server error' });
//             }
//             console.log('Data inserted:', result);
//             return res.status(200).json({ message: 'Data inserted successfully' });
//         });
//     })
// }

// // get data from movement table
// const getmovement = () => {
//     app.get("/getMovements", (req, res)=> {
//     const query = "SELECT * FROM movements";
//     db.query(query, (err, result) => {
//         if (err) {
//             console.error('Error: ', err);
//             return res.status(500).json(err);
//         }
//         console.log('Data:', result);
//         return res.status(200).json(result);
//     });
//   })
// }
// // delete container
// const deletecontainer =() => {
//     app.delete("/deleteContainer/:id", (req, res)=>{
//     const id = req.params.id;
//     const query = `DELETE FROM containers WHERE container_id=?`;
//     db.query(query,[id], (err, data)=> {
//         if(err) {
//             console.log("Error");
//             return res.status(500).json(err);
//         }
//         return res.json({message: "Deleted Sucessfully"});
//     })
//   })
// }
// // update containers
// const updatecontainer = () => {
//      app.put("/updateContainer/:id", (req, res)=> {
//     const id = req.params.id;
//     const query = 'UPDATE containers SET `container_id`=?, `tag_id`=?,`size`=?,`lat`=?,`lng`=?,`alt`=? , `in_date`=? ,`last_dropoff_time`=? WHERE container_id=?';
//     const values = [
//         req.body.container_id,
//         req.body.tag_id,
//         req.body.size,
//         req.body.lat,
//         req.body.lng,
//         req.body.alt,
//         req.body.in_date,
//         req.body.last_dropoff_time
//     ]
//     db.query(query, [...values, id], (err, result) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Data inserted:', result);
//         return res.status(200).json({ message: 'Data Updateed successfully' });
//     });
//   })
// }
// // list grid data
// const getgrids = ()=> {
//     app.get("/getGrids", (req, res)=> {
//     const query = "SELECT * FROM grid";
//     db.query(query, (err, result) => {
//         if (err) {
//             console.error('Error: ', err);
//             return res.status(500).json(err);
//         }
//         console.log('Data:', result);
//         return res.status(200).json(result);
//     });
//   })
// }
// export {getgrids}
// // update grid
// const updategrid = () => {
//     app.put("/updateGrid/:id", (req, res)=> {
//     const id = req.params.id;
//     const query = 'UPDATE grid SET stack = JSON_ARRAY_APPEND(stack, "$", ?) WHERE id = ?';
//     containerToAdd = req.body.container_id;
//     db.query(query, [containerToAdd, id], (err, result) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Data inserted:', result);
//         return res.status(200).json({ message: 'Data Updateed successfully' });
//     });
//   })
// }

// app.post('/data', (req, res) => {
//     const { tag_id, latitude, longitude } = req.body;
//     // Validate data
//     if (!tag_id || !latitude || !longitude) {
//         return res.status(400).json({ error: 'Invalid data' });
//     }

//     // Insert data into the database
//     const query = 'INSERT INTO rfid_data (tag_id, latitude, longitude) VALUES (?, ?, ?)';
//     db.query(query, [tag_id, latitude, longitude], (err, result) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         console.log('Data inserted:', result);
//         return res.status(200).json({ message: 'Data inserted successfully' });
//     });
// });

// const start = async () => {
//     try {
//         app.listen(PORT, () => {
//             console.log(`${PORT} connected`);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();
const express = require('express');
const cors = require("cors");
const mysql = require('mysql2');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost', // Replace with your database host
    user: 'root', // Replace with your database username
    password: 'mahantswami1933', // Replace with your database password
    database: 'gis' // Replace with your database name
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to the database');
    }
});

// list container data
app.get("/getContainers", (req, res) => {
    const query = "SELECT * FROM containers";
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error: ', err);
            return res.status(500).json(err);
        }
        return res.status(200).json(result);
    });
})


// add container
app.post("/addContainers", (req, res) => {
    const query = 'INSERT INTO containers (`container_id`,`container_code`, `tag_id`, `status`,`size`,`lat`,`lng`,`alt`,`in_date` ,`last_dropoff_time` ) VALUES (?)';
    const values = [
        req.body.container_id,
        req.body.container_code,
        req.body.tag_id,
        req.body.status,
        req.body.size,
        req.body.lat,
        req.body.lng,
        req.body.alt,
        req.body.in_date,
        req.body.last_dropoff_time
    ]
    db.query(query, [values], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log('Data inserted:', result);
        return res.status(200).json({ message: 'Data inserted successfully' });
    });
})

// list grid data
app.get("/getGrids", (req, res) => {
    const query = "SELECT * FROM grids";
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error: ', err);
            return res.status(500).json(err);
        }
        return res.status(200).json(result);
    });
})
app.post("/AddToGrid", (req, res) => {
    let alt;
    function updateGlobalVariable(callback) {
        const q_get_no_of_containers = "SELECT no_of_containers from grids where grid_id=?";
        
        db.query(q_get_no_of_containers, [req.body.grid_id], (err, result) => {
            if (err) {
                console.error('Error:', err);
                callback(err);
                return;
            }
            alt = result[0].no_of_containers;
            callback(null, alt);
        });
    }

    updateGlobalVariable((err, updatedValue) => {
        if (err) {
            // Handle error
            console.log(err);
        } else {
            // `alt` has been updated, use `updatedValue`
            let newAlt = updatedValue + 1;
            const q_update_no_of_containers = "UPDATE grids SET no_of_containers = ? where grid_id=?";
            db.query(q_update_no_of_containers, [newAlt, req.body.grid_id], (err, result) => {
                if (err) {
                    console.error('Error:', err);
                    return;
                }
            });

            const q_update_container_alt = "UPDATE containers SET alt = ?, grid_id=? where container_id=?";
            db.query(q_update_container_alt, [newAlt, req.body.grid_id, req.body.container_id], (err, result) => {
                if (err) {
                    console.error('Error:', err);
                    return;
                }
                res.json({ message: "done" })
            });

            // add Movement
        }
    });
})

app.get("/removeFromGrid", (req, res) => {
    let alt;
    function updateGlobalVariable(callback) {
        const q_get_no_of_containers = "SELECT no_of_containers from grids where grid_id=?";
        db.query(q_get_no_of_containers, [req.body.grid_id], (err, result) => {
            if (err) {
                console.error('Error:', err);
                callback(err);
                return;
            }
            alt = result[0].no_of_containers;
            callback(null, alt);
        });
    }

    updateGlobalVariable((err, updatedValue) => {
        if (err) {
            // Handle error
            console.log(err);
        } else {
            // `alt` has been updated, use `updatedValue`
            const q_get_all_containers_on_grid = "SELECT * from containers where grid_id = ?";
            db.query(q_get_all_containers_on_grid, [req.body.grid_id], (err, result) => {
                if (err) {
                    console.error('Error:', err);
                    return;
                }
                let max = 0;
                let container_id = 0;
                result.forEach(element => {
                    if (element.alt > max) {
                        max = element.alt;
                        container_id = element.container_id;
                    }
                });
                if (container_id !== req.body.container_id) {
                    res.json({ message: "can only move upper container" })
                    return;
                }
                let newAlt = updatedValue - 1;
                const q_update_no_of_containers = "UPDATE grids SET no_of_containers = ? where grid_id=?";
                db.query(q_update_no_of_containers, [newAlt, req.body.grid_id], (err, result) => {
                    if (err) {
                        console.error('Error:', err);
                        return;
                    }
                });

                const q_update_container_alt = "UPDATE containers SET alt = ?, grid_id=? where container_id=?";
                db.query(q_update_container_alt, [0, null, req.body.container_id], (err, result) => {
                    if (err) {
                        console.error('Error:', err);
                        return;
                    }
                    res.json({ message: "done" })
                });

                // add Movement
            });
        }
    });
})

app.post("/addmovement", (req, res) => {
    const query = 'INSERT INTO movements (`container_id`,`pick_up_lat`,`pick_up_lng`,`drop_off_lat`,`drop_off_lng`,`pick_up_time`,`drop_off_time`) VALUES (?)';
    const values = [
        res.body.container_id,
        res.body.pick_up_lat,
        res.body.pick_up_lng,
        res.body.drop_off_lat,
        res.body.drop_off_lng,
        res.body.pick_up_time,
        res.body.drop_off_time
    ]
    console.log(req.body)
    db.query(query, [values], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log('Data inserted:', result);
        return res.status(200).json({ message: 'Data inserted successfully' });
    });
})



// get data from movement table
app.get("/getMovements", (req, res) => {
    const query = "SELECT * FROM movements";
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error: ', err);
            return res.status(500).json(err);
        }
        console.log('Data:', result);
        return res.status(200).json(result);
    });
})

// delete container
app.delete("/deleteContainer/:id", (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM containers WHERE container_id=?`;
    db.query(query, [id], (err, data) => {
        if (err) {
            console.log("Error");
            return res.status(500).json(err);
        }
        return res.json({ message: "Deleted Sucessfully" });
    })
})

// update containers
app.put("/updateContainer/:id", (req, res) => {
    const id = req.params.id;
    const query = 'UPDATE containers SET `container_id`=?, `tag_id`=?,`size`=?,`lat`=?,`lng`=?,`in_date`=? ,`last_dropoff_time`=? WHERE container_id=?';
    const values = [
        req.body.container_id,
        req.body.tag_id,
        req.body.size,
        req.body.lat,
        req.body.lng,
        req.body.in_date,
        req.body.last_dropoff_time
    ]
    db.query(query, [...values, id], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(200).json({ message: 'Data Updateed successfully' });
    });
})

app.get("/gridwisedata",(req, res)=>{
    const query = "select * from grids join containers on grids.grid_id=containers.grid_id order by grids.grid_id;";
    db.query(query, (err, result)=>{
        if(err) {
            console.log(err);
            res.status(500).json({message:"Internal Server Error"});
        } 
        res.status(200).json(result);
    })
})

app.post('/data', (req, res) => {
    const { tag_id, latitude, longitude } = req.body;
    // Validate data
    if (!tag_id || !latitude || !longitude) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    // Insert data into the database
    const query = 'INSERT INTO rfid_data (tag_id, latitude, longitude) VALUES (?, ?, ?)';
    db.query(query, [tag_id, latitude, longitude], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log('Data inserted:', result);
        return res.status(200).json({ message: 'Data inserted successfully' });
    });
});

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();