import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from "react";
import { Link, Head, router } from '@inertiajs/react';

export default function EmpleadosCreate({ auth }) {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documentoPrefix, setDocumentoPrefix] = useState('V-'); // Estado para el prefijo del documento
    const [documentoNumber, setDocumentoNumber] = useState(''); // Estado para el número del documento
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const saveData = (e) => {
        e.preventDefault();
        // Concatenar el prefijo y el número del documento
        const documento = documentoPrefix + documentoNumber;
        router.post(route('empleadosSave'), { nombres, apellidos, documento, telefono, direccion });
    }

    const handleDocumentoPrefixChange = (e) => {
        // Actualizar el prefijo del documento
        setDocumentoPrefix(e.target.value);
    }

    const handleDocumentoNumberChange = (e) => {
        // Verificar que solo se ingresen números en el campo del número del documento
        const value = e.target.value.replace(/\D/, ''); // Eliminar caracteres no numéricos
        setDocumentoNumber(value);
    }

    const handleTelefonoChange = (e) => {
        // Verificar que solo se ingresen números en el campo del teléfono
        const value = e.target.value.replace(/\D/, ''); // Eliminar caracteres no numéricos
        setTelefono(value);
    }

    // Función para bloquear cualquier carácter que no sea una letra o un espacio
    const handleTextChange = (e, setState) => {
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Eliminar caracteres no permitidos
        setState(value);
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
                            onChange={e => handleTextChange(e, setNombres)} // Utilizar la nueva función para manejar el cambio
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellidos"
                            name="apellidos"
                            value={apellidos}
                            onChange={e => handleTextChange(e, setApellidos)} // Utilizar la nueva función para manejar el cambio
                            autoComplete="off"
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
                                onChange={handleDocumentoPrefixChange}
                            >
                                <option value="V-">V-</option>
                                <option value="E-">E-</option>
                            </select>
                            {/* Campo de texto para el número del documento */}
                            <input
                                type="text"
                                className="form-control"
                                id="documento"
                                name="documento"
                                value={documentoNumber}
                                onChange={handleDocumentoNumberChange}
                                autoComplete="off"
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
                            name="telefono"
                            value={telefono}
                            onChange={handleTelefonoChange} // Usar la nueva función de manejo de cambio para verificar números
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="direccion">Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            id="direccion"
                            name="direccion"
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                            autoComplete="off"
                            required
                        />
                    </div>


                    <div className="form-group mt-3">
                        <button className="btn btn-success mr-2">Guardar</button>
                        <Link href={route('empleados')} className="btn btn-primary">Volver al listado</Link>
                    </div>
                </form>
                
            </div>
        </AuthenticatedLayout>
    );
}
