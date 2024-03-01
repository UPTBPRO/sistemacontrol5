<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Empleados;

class EmpleadosController extends Controller
{
    //
    //mostrar empleados

    public function indexMostrar()
    {

         $empleados = Empleados::all();
    
         return Inertia::render('Empleados/EmpleadosShow', ["empleados" => $empleados]);
     
     
    }

    //
    //crear empleados **********************************************************

    public function create()
    {

        return Inertia::render('Empleados/EmpleadosCreate');
     
     
    }

    public function createSave(Request $request)
    {
        $empleado = new Empleados($request->input());
        $empleado->saveOrFail();
        return redirect()->route("empleados");
    }

    /************************************************************************ */

    //
    //editar empleados **********************************************

    public function editar(Request $request)
    {
        $empleado = Empleados::find($request->empleado);
        return Inertia::render('Empleados/EmpleadosEdit', ['empleado' => $empleado]);
    }

    public function editarStore(Request $request)
    {
        $empleado = Empleados::findOrFail($request->input('id'));

        $empleado->fill($request->input());
        $empleado->saveOrFail();

        return redirect()->route("empleados");
    }

    //*************************************************************** */

    //
    //eliminar empleados **********************************************

    public function eliminar(Request $request)
    {
        $empleado = Empleados::findOrFail($request->empleado);
        $empleado->delete();
        
        return redirect()->route("empleados");
    }

}
