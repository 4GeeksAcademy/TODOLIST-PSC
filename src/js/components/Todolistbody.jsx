import React, { useState } from "react";


const TodoListBody = () => {
    const [lista, setLista] = useState(['Aprender React', 'Aprender JavaScript', 'Aprender HTML'])

    const [tarea, setTarea] = useState('')

    function agregarTarea(e) {

        if (e.key === 'Enter') {
            //     console.log(e.key)

            setLista([...lista, tarea])
            setTarea('')
        }


    }

    function borrar (index) {
        
        let aux = lista.filter((item, id) => {
            
            if ( id !== index) {
                return item 
            }

        } )
        
        setLista (aux)

    }

    return (
        <div className="container mt-3">
            <h1 className="mb-3">TodoList</h1>
            <input className="form-control mb-2" type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                onKeyDown={(e) => agregarTarea(e)}
            />
            <div className="dataList">
                <ul className="list-group">
                    {lista.map((tarea, id) => (

                        <li key={id} className="list-group-item">
                            {tarea}
                            <button className="btn btn-danger float-end icono" onClick={() => borrar(id)}>borrar</button>
                        </li>

                    ))}


                </ul>
            </div>
            <p className="mt-3">Tareas Pendientes: {lista.length}</p>
        </div>


    );
};

export default TodoListBody