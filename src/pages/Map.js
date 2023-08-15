// import React, { useEffect, useState } from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import axios from 'axios';
// // import {app} from './app';
// const containerStyle = {
//   width: '100%',
//   height: '100vh'
// };

// const center = {
//   lat: 22.741726,
//   lng: 69.683151
// };

// function Map() {

//   const [containerData, setContainerData] = useState([]);
//   const [grid, setGrid] = useState([])

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/getContainers");
//       setContainerData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchGrid = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/getGrids");
//       setGrid(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const updateGrid = async (grid_id, containerid) => {
//     try {
//       await axios.put("http://localhost:5000/updateGrid/" + grid_id, {
//         container_id: containerid,
//       })
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//     fetchGrid();
//   }, []);

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDeyTA0b_vI5ESomNvn-FQOjZqXeMX_rSY",
//     libraries: ["geometry"], // for erro poly undefined
//   })
//   function getRedShade(number) {
//     if (number === 0) {
//       return 'rgb(0, 0, 0)'; // No shade
//     }
//     else if (number < 1 || number > 5) {
//       throw new Error('Invalid number. Please provide a number between 1 and 5.');
//     }

//     // Calculate the shade value based on the number
//     var shadeValue = 255 - (number - 1) * 50;

//     // Construct the color string
//     var color = 'rgb(' + shadeValue + ', 0, 0)';

//     return color;
//   }
//   return isLoaded ? (
//     <GoogleMap
//       zoom={10}
//       mapContainerStyle={containerStyle}
//       onLoad={map => {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//           // map.data.loadGeoJson('grid.json');
//           // let data = app.getgrids();// import from database
//         for (let i = 0; i < containerData.length; i++) {
//           let latLng = new window.google.maps.LatLng(containerData[i].lat, containerData[i].lng);
//           for (let j = 0; j < grid.length; j++) {
//             let triangleCoords = [
//               {
//                 lng: grid[j].coordinates[0][0][0],
//                 lat: grid[j].coordinates[0][0][1],
//               },
//               {
//                 lng: grid[j].coordinates[0][1][0],
//                 lat: grid[j].coordinates[0][1][1],
//               },
//               {
//                 lng: grid[j].coordinates[0][2][0],
//                 lat: grid[j].coordinates[0][2][1],
//               },
//               {
//                 lng: grid[j].coordinates[0][3][0],
//                 lat: grid[j].coordinates[0][3][1],
//               },
//               {
//                 lng: grid[j].coordinates[0][4][0],
//                 lat: grid[j].coordinates[0][4][1],
//               },
//             ];

//             let bermudaTriangle = new window.google.maps.Polygon({
//               paths: triangleCoords,
//               strokeColor: grid[j].stack ? 'red' : 'white',
//               strokeOpacity: 0.8,
//               strokeWeight: 2,
//               fillColor: grid[j].stack ? getRedShade(grid[j].stack.length) : 'white',
//               fillOpacity: 1,
//             });

//             bermudaTriangle.addListener('click', function (event) {
//               // Handle the click event here
//               console.log('Polygon clicked!', grid[j].stack.length);

//               // For example, you can open an info window at the clicked location
//               var infoWindow = new window.google.maps.InfoWindow({
//                 content: `${grid[j].stack.length}`,
//               });

//               infoWindow.setPosition(event.latLng);
//               infoWindow.open(map);
//             });

//             if (window.google.maps.geometry.poly.containsLocation(latLng, bermudaTriangle)) {
//               if(!grid[j].stack.includes(containerData[i].container_id)) {
//                 updateGrid(grid[j].id, containerData[i].container_id);
//               }
//               bermudaTriangle.setMap(map);
//             }
//           }
//         }
//         var infoWindow = new window.google.maps.InfoWindow();
//         map.data.addListener('click', function (event) {
//           console.log(event.feature.getGeometry());
//           var id = event.feature.getProperty('stack');
//           // Set the content for the info window
//           var content = '<h3>' + "Hello" + '</h3>';

//           // Set the position and content of the info window
//           infoWindow.setPosition(event.latLng);
//           infoWindow.setContent(content);

//           // Open the info window
//           infoWindow.open(map);
//         });

//       }}
//       onUnmount={map => {
//         // do your stuff before map is unmounted
//       }}
//     />
//   ) : <></>
// }

// export default React.memo(Map)
import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 22.741726,
  lng: 69.683151
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDeyTA0b_vI5ESomNvn-FQOjZqXeMX_rSY",
    libraries: ["geometry"],
  })

  function getRedShade(number) {
    if (number === 0) {
      return 'rgb(0, 0, 0)'; // No shade
    }
    else if (number < 1 || number > 5) {
      throw new Error('Invalid number. Please provide a number between 1 and 5.');
    }
    // Calculate the shade value based on the number
    var shadeValue = 255 - (number - 1) * 50;
    // Construct the color string
    var color = 'rgb(' + shadeValue + ', 0, 0)';
    return color;
  }

  return isLoaded ? (
    <GoogleMap
      zoom={10}
      mapContainerStyle={containerStyle}
      onLoad={map => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        // map.data.loadGeoJson('grid.json');
        let dataObject = [];
        let gridWiseData = [];

        const fetchData = (callback) => {
          axios.get("http://localhost:5000/gridwisedata")
            .then(res => {
              gridWiseData = res.data;
              console.log("@@"); console.log(res.data);
              callback(gridWiseData); // Call the callback with the fetched data
            })
            .catch(err => {
              console.log(err);
              callback(null, err); // Call the callback with an error
            });
        };
        fetchData((data, error) => {
          if (error) {
            // Handle error
            console.log("Error:", error);
          } else {
            let id = gridWiseData[0].grid_id;

            for (let i = 0; i <= gridWiseData.length; i++) {
              if (i != gridWiseData.length && gridWiseData[i].grid_id == id) {
                dataObject.push(gridWiseData[i]);
              } else {
                let triangleCoords = [
                  {
                    lng: gridWiseData[i - 1].coordinates.coordinates[0][0],
                    lat: gridWiseData[i - 1].coordinates.coordinates[0][1],
                  },
                  {
                    lng: gridWiseData[i - 1].coordinates.coordinates[1][0],
                    lat: gridWiseData[i - 1].coordinates.coordinates[1][1],
                  },
                  {
                    lng: gridWiseData[i - 1].coordinates.coordinates[2][0],
                    lat: gridWiseData[i - 1].coordinates.coordinates[2][1],
                  },
                  {
                    lng: gridWiseData[i - 1].coordinates.coordinates[3][0],
                    lat: gridWiseData[i - 1].coordinates.coordinates[3][1],
                  },
                  {
                    lng: gridWiseData[i - 1].coordinates.coordinates[4][0],
                    lat: gridWiseData[i - 1].coordinates.coordinates[4][1],
                  },
                ];
                let bermudaTriangle = new window.google.maps.Polygon({
                  paths: triangleCoords,
                  strokeColor: 'red',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: getRedShade(2),
                  fillOpacity: 1,
                });
                let content = "";
                dataObject.forEach(element => {
                  content += `<b>Container Code:</b> <button onClick={console.log(${element.container_id})}>${element.container_code}</button><br/>`
                })
                
                bermudaTriangle.addListener('click', function (event) {
                  var infoWindow = new window.google.maps.InfoWindow({
                    content: content,
                  })
                  infoWindow.setPosition(event.latLng);
                  console.log(event.latLng)
                  infoWindow.open(map);
                });
                bermudaTriangle.setMap(map);
                dataObject=[];
                dataObject.push(gridWiseData[i]);
                if(i!=gridWiseData.length) {
                  id=gridWiseData[i].grid_id;
                }
              }
            }
          }
        });
      }}
      onUnmount={map => {
        // do your stuff before map is unmounted
      }}
    />
  ) : <></>
}

export default React.memo(Map)