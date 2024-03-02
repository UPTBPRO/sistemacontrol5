import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function EmpleadosShow({ empleados, auth }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Función para filtrar empleados
    const filteredEmpleados = empleados.filter(empleado =>
        empleado.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
        empleado.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
        empleado.documento.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Empleados</h2>}
        >
            <Head title="Empleados" />

            <div className="container mt-4">
                <div className="row mb-3">
                    <div className="col-md-4">
                        <Link href={route('empleadosCreate')} className="btn btn-success w-100">Agregar</Link>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            name="txtBusqueda"
                            id="txtBusqueda"
                            className="form-control"
                            placeholder="Búsqueda"
                            autoFocus
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>RIF/CI</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmpleados.map((empleado) => (
                                <tr key={empleado.id}>
                                    <td>{empleado.nombres}</td>
                                    <td>{empleado.apellidos}</td>
                                    <td>{empleado.documento}</td>
                                    <td>{empleado.telefono}</td>
                                    <td>{empleado.direccion}</td>
                                    <td>
                                        <Link className="btn btn-warning" href={route('empleadosEdit')} method="POST" data={{empleado: empleado.id}}>
                                            Editar
                                        </Link>
                                    </td>
                                    <td>
                                        <Link className="btn btn-danger" href={route('empleadosDelete')} method="POST" data={{empleado: empleado.id}}>
                                            Eliminar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
