import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

export default function EmpleadosShow({ empleados, auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Empleados</h2>}
        >
            <Head title="Empleados" />

           
        
            <div className="row">
                <Link href="#" className="btn btn-success mb-2 col-md-2">Agregar</Link>
                
            </div>
            <div className="row">
                <input style={{ width: "30%" }} type="text" name="txtBusqueda" id="txtBusqueda" className="col-md-3 form-control" placeholder="Busqueda"autoFocus/>

            </div>            
        <table id="tblEmpleados" className="table table-bordered">
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
           
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{ empleado.nombres }</td>
              <td>{ empleado.apellidos }</td>
              <td>{ empleado.documento }</td>
              <td>{ empleado.telefono }</td>
              <td>{ empleado.direccion }</td>
              <td>
              <Link className="btn btn-warning"
               href="#">
                <i class="fa">&#xf044;</i>
              </Link>
              </td>
              <td>
              <Link className="btn btn-danger"
               href="#">
                <i class="fas fa-trash"></i>
              </Link>
              </td>
            </tr>
           ))}
           
          </tbody>
      
      
      
       </table>
        </AuthenticatedLayout>
    );
}
