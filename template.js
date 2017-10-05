var makeTemplate = data =>  
    data.map(({nombre, direccion, id}) => 
        `<div>
           <h3 class="acopio-id" data-id="${id}">${nombre} ${direccion}</h3> 
           <span class="ids">id: ${id}</span>
        </div>`
    )
    .join('')

var saveData = obj => data  => {
    data.forEach(el => obj.push(el))
    return data
}

var makeContactosTemplate = data => event =>  {
    let acopio = data.filter(el => el.id === event.target.dataset.id)
    let contactos = acopio.length > 0 ? acopio[0].contactos : []
    let template = contactos.length > 0 
        ?   contactos.map(({nombre, telefono}) => 
                `<div>
                   <h3>${nombre || 'Anónimo'}</h3>
                   <p>${telefono || 'Sin teléfono'}</p>
                </div>`
            )
            .join('')
        :   `<h3>No hay contactos</h3>`
    document.getElementById('contactos').innerHTML = template
}


var clickEventForAcopios = (cb) => () => 
    document
        .querySelectorAll('.acopio-id')
        .forEach(el => 
            el.addEventListener('click', e => cb(e))
        )

/**********/
var log = x => {
    console.log(x)
    return x
}

