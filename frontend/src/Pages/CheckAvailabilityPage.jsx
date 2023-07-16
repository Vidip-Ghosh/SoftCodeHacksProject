/* eslint-disable react/jsx-key */
import JsonData from '../assets/Db.json'
import {Link} from 'react-router-dom'
const CheckAvailabilityPage = () => {
    const data = JsonData.map(
        (info)=>{
            return (
                <tr>
                    <td>{info['States&UT']}</td>
                    <td>{info['PHC']}</td>
                    <td>{info['CHC']}</td>
                    <td>{info['SDH']}</td>
                    <td>{info['DH']}</td>
                    <td>{info['Total']}</td>
                </tr>
            )
        }
    )
  return (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>States&UT</th>
                    <th>PHC</th>
                    <th>CHC</th>
                    <th>SDH</th>
                    <th>DH</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>    
                {data} 
            </tbody>
        </table>   
        <Link to='/'>Back to Home Page</Link>
    </div>
  )
}

export default CheckAvailabilityPage