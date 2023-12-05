<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Empleados;
//use App\Http\Middleware\Authenticate;

class EmpleadosController extends Controller
{
    //

    public function indexMostrar()
    	{

        	$empleados = Empleados::all();
       
			//return Inertia::render('EmpleadosShow', ["empleados" => $empleados]);
        	return Inertia::render('Empleados/EmpleadosShow', ["empleados" => $empleados]);
        
        
   	 }

}
