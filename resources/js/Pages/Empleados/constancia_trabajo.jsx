import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import jsPDF from 'jspdf';

export default function EmpleadosShow({ empleados, auth }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.text(20, 20, 'Lista de Empleados');

        // Agregar empleados al PDF
        let yPos = 30;
        empleados.forEach((empleado, index) => {
            doc.text(20, yPos + index * 10, `Nombre: ${empleado.nombres}`);
            doc.text(20, yPos + 5 + index * 10, `Apellido: ${empleado.apellidos}`);
            // Agregar más campos según sea necesario
        });

        // Descargar el PDF
        doc.save('constancia_trabajo.pdf');
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Empleados</h2>}
        >
            <Head title="Empleados" />

            <div className="container mt-4">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <button onClick={handleDownloadPDF} className="btn btn-primary w-100">Descargar PDF</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
