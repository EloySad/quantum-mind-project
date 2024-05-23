export function index(users, tbody) {
    tbody.innerHTML = ``
    users.forEach(user => {
        tbody.innerHTML += `
            <tr> 
                <th scope="row"> ${user.id}</th>
                <td> ${user.name} </td>
                <td> ${user.lastName} </td>
                <td> ${user.email} </td>
                <td>
                    <button type="button" data-id="${user.id}" class="btn btn-primary">edit</button>
                    <button type="button" data-id="${user.id}" class="btn btn-danger">delete</button>
                </td>    
            </tr>
        `
    });
}

export function edit(name, lastName, email, users) {
    const tempUser = {
        id: Date.now(), //Fecha actual pero saca un id diferente por cada segundo
        //id: users.length + 1,
        name: name.value,
        lastName: lastName.value,
        email: email.value,
    };
    users.push(tempUser)
}
export function deleteUser(users, idToDelete) {
    users.forEach((user, index) => {
        if (user.id == idToDelete) {
            users.splice(index, 1)
        }
    })
}
