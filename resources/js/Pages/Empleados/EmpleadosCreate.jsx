import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from "react";
import { Link, Head, router } from '@inertiajs/react';


export default function EmpleadosCreate({ auth }) {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')




        const saveData = (e) => {
        e.preventDefault();
        router.post(route('empleadosSave'), { nombres, apellidos, documento, telefono, direccion });
        }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Empleado</h2>}
        >
            <Head title="Empleados" />

            <div className="container mt-4">
                
                <form onSubmit={saveData}>

                    <div className="form-group">
                    <label htmlFor="nombres">Nombres</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombres"
                        name="nombres"
                        value={nombres}
                        onChange={e=>setNombres(e.target.value)}
                        placeholder="Ejemp.: Petronilo"
                        autoComplete="off"
                        required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input
                        type="text"
                        className="form-control"
                        id="apellidos"
                        name="apellidos"
                        value={apellidos}
                        onChange={e=>setApellidos(e.target.value)}
                        placeholder="Ejemp.: PEREZ"
                        autoComplete="off"
                        required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="documento">Documento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="documento"
                        name="documento"
                        value={documento}
                        onChange={e=>setDocumento(e.target.value)}
                        placeholder=""
                        autoComplete="off"
                        required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        type="text"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        value={telefono}
                        onChange={e=>setTelefono(e.target.value)}
                        placeholder=""
                        autoComplete="off"
                        required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                        type="direccion"
                        className="form-control"
                        id="direccion"
                        name="direccion"
                        value={direccion}
                        onChange={e=>setDireccion(e.target.value)}
                        placeholder=""
                        autoComplete="off"
                        required/>
                    </div>



                        



                    <div className="form-group mt-3">
                    <button className="btn btn-success">Guardar</button>
                    <Link href={route('empleados')} className="btn btn-primary">Volver al listado</Link>
                    </div>
                </form>
                
            </div>
        </AuthenticatedLayout>
    );
}
