function makeTable(userData) {
    // Por cada elemento del array de datos de usuario,
    // generamos una fila con su name, username, email y phone
    // notar que userData.map nos devuelve una lista de strings
    // que en este caso son el html de los rows
    const rows = userData.map(user => 
    `<tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
    </tr>`)

    // Convertimos el array de rows en un sólo string que usaremos 
    // dentro del tbody de nuestra tabla
    const rowsHTML = rows.join('')

    // Generamos la tabla
    return `
    <table>
        <thead>
            <th>Nombre</th>
            <th>Username</th>
            <th>Email</th>
            <th>Teléfono</th>
        </thead>
        <tbody>
            ${rowsHTML}
        </tbody>
    </table>`
    
}  