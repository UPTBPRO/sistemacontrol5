import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useState } from "react";
import { Link, Head, router } from '@inertiajs/react';

export default function EmpleadosEdit({ empleado, auth }) {
    const [id, setId] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    

	useEffect(() => {
        setId(empleado.id)
		setNombres(empleado.nombres)
		setApellidos(empleado.apellidos)
        setDocumento(empleado.documento)
        setTelefono(empleado.telefono)
        setDireccion(empleado.direccion)
        

	}, []);

	const updateEmpleado = (e) => {
		e.preventDefault();
		router.post(route('empleadosUpdate'), { id, nombres, apellidos, documento, telefono, direccion });
	};
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Empleados</h2>}
        >
            <Head title="Empleados" />

            <div className="container mt-4">
               
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={updateEmpleado}>
                            <div className="form-group">
                                <label htmlFor="nombres">Nombres</label>
                                <input
                                type="text"
                                className="form-control"
                                id="nombres"
                                value={nombres}
                                onChange={(e) => setNombres(e.target.value)}
                                placeholder="Juan"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input
                                type="text"
                                className="form-control"
                                id="apellidos"
                                value={apellidos}
                                onChange={(e) => setApellidos(e.target.value)}
                                placeholder="Toledo"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="documento">Documento</label>
                                <input
                                type="text"
                                className="form-control"
                                id="documento"
                                value={documento}
                                onChange={(e) => setDocumento(e.target.value)}
                                placeholder="20.20"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono">Telefono</label>
                                <input
                                type="text"
                                className="form-control"
                                id="telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                placeholder="0410-9541234"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="direccion">Dirección</label>
                                <input
                                type="text"
                                className="form-control"
                                id="direccion"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                placeholder="Las colinas calle 500"
                                />
                            </div>
                            
                            <div className="form-group mt-3">
		                        <button className="btn btn-success">Guardar</button>
		                        <Link href={route('empleados')} className="btn btn-primary">Volver al listado</Link>
		                    </div>
                        </form>
                    </div>
                </div>

                
            </div> {/* container mt-4 */}
        </AuthenticatedLayout>
    );
}
