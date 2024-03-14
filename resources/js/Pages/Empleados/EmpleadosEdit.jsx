import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useState } from "react";
import { Link, Head, router } from '@inertiajs/react';

export default function EmpleadosEdit({ empleado, auth }) {
    const [id, setId] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documentoPrefix, setDocumentoPrefix] = useState('');
    const [documentoNumber, setDocumentoNumber] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    useEffect(() => {
        setId(empleado.id);
        setNombres(empleado.nombres);
        setApellidos(empleado.apellidos);
        // Separar el prefijo del número del documento
        const [prefix, number] = empleado.documento.split('-');
        setDocumentoPrefix(prefix);
        setDocumentoNumber(number);
        setTelefono(empleado.telefono);
        setDireccion(empleado.direccion);
    }, []);

    const updateEmpleado = (e) => {
        e.preventDefault();
        // Concatenar el prefijo y el número del documento
        const documento = documentoPrefix + '-' + documentoNumber;
        router.post(route('empleadosUpdate'), { id, nombres, apellidos, documento, telefono, direccion });
    };

    // Función para permitir solo números en el campo de teléfono
    const handleTelefonoChange = (e) => {
        // Eliminar caracteres no numéricos usando una expresión regular
        const value = e.target.value.replace(/\D/g, '');
        setTelefono(value);
    }

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
                                    disabled
                                    required
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
                                    disabled
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="documento">Documento</label>
                                <div className="d-flex">
                                    {/* Menú desplegable para el prefijo del documento */}
                                    <select
                                        className="form-control mr-2"
                                        value={documentoPrefix}
                                        onChange={(e) => setDocumentoPrefix(e.target.value)}
                                        disabled // Deshabilitar el campo de selección
                                    >
                                        <option value="V-">V-</option>
                                        <option value="E-">E-</option>
                                    </select>
                                    {/* Campo de texto para el número del documento */}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="documento"
                                        value={documentoNumber}
                                        onChange={(e) => setDocumentoNumber(e.target.value)}
                                        disabled // Deshabilitar el campo de texto
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono">Telefono</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    value={telefono}
                                    onChange={handleTelefonoChange} // Utilizar la función de manejo de cambio de teléfono
                                    required
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
                                    required
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
