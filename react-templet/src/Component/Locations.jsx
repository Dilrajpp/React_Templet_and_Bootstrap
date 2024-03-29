
import React from 'react';

const Locations = () => {
    return (
        <>
            <h2 className='location'>Our <span className='text-success1'>Locations</span></h2>
            <table class="table table-borderless table-light pb-5 table1">
                <tbody className='table1'>
                    <tr>
                    <th scope="row">Bengaluru</th>
                    <th scope="col">Marathahalli</th>
                    <th scope="col">BTM layout</th>
                    <th scope="col">Domlur</th>
                    <th scope="col">Jayanagar</th>
                    <th scope="col">Koramangala</th>
                    <th scope="col">Basavanagudi</th>
                    <th scope="col">Banashankari</th>
                    <th scope="col">Whitefield</th>
                    <th scope="col">Rajajinagar</th>
                    </tr>
                    <tr>
                    <th scope="row">Madhya Pradesh</th>
                    <th scope="col">Rewa</th>
                    <th scope="col">Satna</th>
                    <th scope="col">Singrauli</th>
                    <th scope="col">Sidhi</th>
                    <th scope="col">Indore</th>
                    <th scope="col">Bhopal</th>
                    <th scope="col">Jabalpur</th>
                    <th scope="col">Damoh</th>
                    <th scope="col">Panna</th>
                    </tr>
                    <tr>
                    <th scope="row">Pune</th>
                    <th scope="col">Viman Nagar</th>
                    <th scope="col">Hadapsar</th>
                    <th scope="col">Hinjewadi</th>
                    <th scope="col">Katraj</th>
                    <th scope="col">Kharadi</th>
                    <th scope="col">Pimpri</th>
                    <th scope="col">Chinchwad</th>
                    <th scope="col">Shivajinagar</th>
                    <th scope="col">Narayangaon</th>
                    </tr>
                    <tr>
                    <th scope="row">Delhi</th>
                    <td>Mehrauli</td>
                    <td>Siri</td>
                    <td>Tughlakabad</td>
                    <td>Firozabad</td>
                    <td>Shergarh</td>
                    <td>Shahjehabanad</td>
                    <td>New Delhi</td>
                    <td>Tughlaqabad</td>
                    <td>Firozabad</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Locations;