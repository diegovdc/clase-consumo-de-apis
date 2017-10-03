var makeTemplate = data =>  
    data.map(({first_name, last_name, id}) => 
        `<div>
           <h3>${first_name} ${last_name}</h3> <span>id: ${id}</span>
        </div>`
    )
    .join('')

/**********/
var log = x => {
    console.log(x)
    return x
}

