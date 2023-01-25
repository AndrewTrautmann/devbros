import './App.css';
import { useState } from "react";
import data from './bikes.json';

function App() {

    const [bikes, setBikes] = useState(data);
    const [sorted, setSorted] = useState({ sorted: "BikesID", reversed: false });
    const [searchPhrase, setsearchPhrase] = useState("");

    const sortById = () => {
        setSorted({ sorted: "BikeID", reversed: !sorted.reversed });
        const bikeCopy = [...bikes];

        bikeCopy.sort((bikeA, bikeB) => {

            if (sorted.reversed) {
                return bikeA.BikeID - bikeB.BikeID;

            }
            return bikeB.BikeID - bikeA.BikeID;
        });

        setBikes(bikeCopy);
    }

    const sortByYear = () => {
        setSorted({ sorted: "year", reversed: !sorted.reversed });
        const bikeCopy = [...bikes];

        bikeCopy.sort((bikeA, bikeB) => {

            if (sorted.reversed) {
                return bikeA.Year - bikeB.Year;

            }
            return bikeB.Year - bikeA.Year;
        });

        setBikes(bikeCopy);
    }

    const sortByDisplacement = () => {
        setSorted({ sorted: "Displacement", reversed: !sorted.reversed });
        const bikeCopy = [...bikes];

        bikeCopy.sort((bikeA, bikeB) => {

            if (sorted.reversed) {
                return bikeA.Displacement - bikeB.Displacement;

            }
            return bikeB.Displacement - bikeA.Displacement;
        });

        setBikes(bikeCopy);
    }

    const sortByPrice = () => {
        setSorted({ sorted: "Price", reversed: !sorted.reversed });
        const bikeCopy = [...bikes];

        bikeCopy.sort((bikeA, bikeB) => {

            if (sorted.reversed) {
                return bikeA.Price - bikeB.Price;

            }
            return bikeB.Price - bikeA.Price;
        });

        setBikes(bikeCopy);
    }

    const sortByMake = () => {
        setSorted({ sorted: "Make", reversed: !sorted.reversed });
        const bikeCopy = [...bikes];

        bikeCopy.sort((bikeA, bikeB) => {
            const makeA = bikeA.Make.toLowerCase();
            const makeB = bikeB.Make.toLowerCase();

            if (sorted.reversed) {
                return makeB.localeCompare(makeA);
            }

            return makeA.localeCompare(makeB);
        })
        setBikes(bikeCopy);
    };

    const sortByTerrain = () => {
        setSorted({ sorted: "Terrain", reversed: !sorted.reversed });
        const bikeCopy = [...bikes];

        bikeCopy.sort((bikeA, bikeB) => {
            const makeA = bikeA.Terrain;
            const makeB = bikeB.Terrain;

            if (sorted.reversed) {
                return makeB.localeCompare(makeA);
            }

            return makeA.localeCompare(makeB);
        })
        setBikes(bikeCopy);
    };

    const sortByModel = () => {
        setSorted({ sorted: "Model", reversed: !sorted.reversed });
        const bikeCopy = [...bikes];

        bikeCopy.sort((bikeA, bikeB) => {
            const modelA = bikeA.Model;
            const modelB = bikeB.Model;

            if (sorted.reversed) {
                return modelB.localeCompare(modelA);
            }

            return modelA.localeCompare(modelB);
        })
        setBikes(bikeCopy);
    };

    const searchFilter = (event) => {
        setsearchPhrase(event.target.value.toLowerCase());
    }

    const search = () => {
        const matchedBikes = data.filter((bikes) => {
            return bikes.Make.toLowerCase().includes(searchPhrase) ||
                bikes.Model.toLowerCase().includes(searchPhrase) ||
                bikes.Terrain.toLowerCase().includes(searchPhrase);
        })

        setBikes(matchedBikes);
    }
    const renderData = () => {
        return bikes && bikes.map((record) => { // Checking to see if data exist before displaying the records

            return (
                <tr key={record.BikeID}>
                    <td> {record.BikeID}</td>
                    <td> {record.Make}</td>
                    <td> {record.Model}</td>
                    <td> {record.Year}</td>
                    <td> {record.Displacement}</td>
                    <td> {record.Price}</td>
                    <td> {record.Terrain}</td>
                    <td> {record.Description}</td>
                </tr>
            );
        })
    }

    return (
        <div className="App">

            <div className="search-container">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Search"
                    value={searchPhrase}
                    onChange={searchFilter}
                />

                <button className="searchButton" onClick={search} >
                    <span className="test">Search</span>
                </button>

            </div>

            <div className="table-container">
                <table border="2" frame="vsides, below" rules="none">
                    <thead>
                        <tr>
                            <th onClick={sortById}>
                                <span>BikeID</span>
                            </th>
                            <th onClick={sortByMake}>
                                <span>Make</span>
                            </th>
                            <th onClick={sortByModel}>
                                <span>Model</span>
                            </th>
                            <th onClick={sortByYear}>
                                <span>Year</span>
                            </th>
                            <th onClick={sortByDisplacement}>
                                <span>Displacement</span>
                            </th>
                            <th onClick={sortByPrice}>
                                <span>Price</span>
                            </th>
                            <th onClick={sortByTerrain}>
                                <span>Terrain</span>
                            </th>
                            <th>
                                <span>Description</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
