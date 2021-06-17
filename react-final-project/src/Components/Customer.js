
// Incase Selective Component while checking on condition

const Customer = (params) => {
    return (
        <div>
            <h3>Customer Management</h3>
            <h4>Hello {params.name}!!</h4>
            <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.</p>
        </div>
    )
}


// const Customer = ({ match }) => {
//     return (
//         <div>
//             <h3>Customer Management</h3>
//             <h4>Hello {match.params.name}!!</h4>
//             <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.</p>
//         </div>
//     )
// }

export default Customer;