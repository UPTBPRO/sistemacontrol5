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
    //crear empleados

    public function crear()
    {

         
     
     
    }

    //
    //editar empleados

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

}
