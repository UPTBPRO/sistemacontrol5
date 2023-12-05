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

}
