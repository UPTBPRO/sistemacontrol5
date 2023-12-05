import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

           
        
            <div className="row">
                <Link href="/createClienteInertia" className="btn btn-success mb-2 col-md-2">Agregar</Link>
                
            </div>
            <div className="row">
                <input style={{ width: "30%" }} type="text" name="txtBusqueda" id="txtBusqueda" className="col-md-3 form-control" placeholder="Busqueda"autoFocus/>

            </div>            
        <table id="tblProducto" className="table table-bordered">
          <thead>
           <tr>
            <th>Nombre</th>
            <th>RIF/CI</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Editar</th>
            <th>Eliminar</th>
           </tr>
          </thead>
          <tbody>
           
            <tr key='5'>
              <td>pedro</td>
              <td>12336</td>
              <td>0425555</td>
              <td>dsfdfddf</td>
              <td>
              <Link className="btn btn-warning"
               href="/editClienteReact/">
                <i class="fa fa-edit"></i>
              </Link>
              </td>
              <td>
              <Link className="btn btn-danger"
               href="/deleteClienteReact/">
                <i class="fa fa-trash"></i>
              </Link>
              </td>
            </tr>
           
          </tbody>
      
      
      
       </table>
        </AuthenticatedLayout>
    );
}
