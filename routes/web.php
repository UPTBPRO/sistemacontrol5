<?php
//Hola soy Alberto
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EmpleadosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* *****
********************************
*controlador EmpleadosController
********************************
* ******/

 //ruta para mostrar todos los empleados con react
Route::get("/empleados", [EmpleadosController::class, "indexMostrar"])->middleware(['auth', 'verified'])->name("empleados");

//rutas para crear empleados
Route::get("/empleadosCreate", [EmpleadosController::class, "create"])->middleware(['auth', 'verified'])->name("empleadosCreate");
Route::post("/empleadosSave", [EmpleadosController::class, "createSave"])->middleware(['auth', 'verified'])->name("empleadosSave");

//rutas para modificar empleados con react
Route::post("/empleadosEdit", [EmpleadosController::class, "editar"])->middleware(['auth', 'verified'])->name("empleadosEdit");
Route::post("/empleadosUpdate", [EmpleadosController::class, "editarStore"])->middleware(['auth', 'verified'])->name("empleadosUpdate");


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
