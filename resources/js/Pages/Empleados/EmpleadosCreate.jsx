import { Link, Head } from '@inertiajs/react';

export default function SimpleMenu({ auth }) {
    return (
        <>
            <Head title="Bienvenido" />
            <div className="container" id="container">
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
                        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap');
                        
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                            font-family: 'Montserrat', sans-serif;
                        }
                        
                        body {
                            background-color: #c9d6ff;
                            background: linear-gradient(to right, #e2e2e2, #c9d6ff);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            height: 100vh;
                        }
                        
                        .container {
                            background-color: #2d33a8;
                            border-radius: 30px;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
                            position: relative;
                            width: 768px;
                            max-width: 100%;
                            min-height: 480px;
                        }
                        
                        .container p {
                            font-size: 14px;
                            line-height: 20px;
                            letter-spacing: 0.3px;
                            margin: 20px 0;
                        }
                        
                        .container span {
                            font-size: 12px;
                        }
                        
                        .btn-iniciar-sesion {
                            background-color: #2d48a8;
                            color: #fff;
                            font-size: 12px;
                            padding: 10px 45px;
                            border: 1px solid transparent;
                            border-radius: 8px;
                            font-weight: 600;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                            margin-top: 10px;
                            cursor: pointer;
                            width: 100%;
                        }
                        
                        .btn-registrarse {
                            background-color: #1fcb2a;
                            color: #fff;
                            font-size: 12px;
                            padding: 10px 45px;
                            border: 1px solid transparent;
                            border-radius: 8px;
                            font-weight: 600;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                            margin-top: 10px;
                            cursor: pointer;
                            width: 100%;
                        }
                        
                        .container form {
                            background-color: #2d33a8;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            padding: 200px 40px; /* Ajuste del espacio alrededor del contenido */
                            height: 100%;
                        }
                        
                        .form-container {
                            top: 0;
                            height: 100%;
                        }
                        
                        .inicia-sesion {
                            left: 0;
                            width: 50%;
                        }
                        
                        .toggle-container {
                            position: absolute;
                            top: 0;
                            left: 50%;
                            width: 50%;
                            height: 100%;
                            overflow: hidden;
                            transition: all 0.6s ease-in-out;
                            border-radius: 50px 0 0 50px;
                        }
                        
                        .toggle {
                            background-color: #f8f2f2;
                            height: 100%;
                            background: whitesmoke;
                            color: #fff;
                            position: relative;
                            left: -100%;
                            height: 100%;
                            width: 200%;
                        }
                        
                        .toggle-panel {
                            position: absolute;
                            width: 50%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            padding: 0 30px;
                            text-align: center;
                            top: 0;
                        }
                        
                        .toggle-derecha {
                            right: 0;
                        }
                        
                        .logo {
                            width: 100%;
                            margin: 0;
                            padding-bottom: 20px;
                            padding-top: 20px;
                        }
                        
                        .vision {
                            font-style: italic;
                            font-weight: 100;
                        }
                        
                        .btn-iniciar-sesion:hover {
                            background: #021c78;
                        }
                        
                        .btn-registrarse:hover {
                            background: #12811a;
                        }
                        
                        p {
                            color: black;
                        }
                        
                        h1 {
                            color: white;
                            font-size: 30px;
                            font-weight: 600;
                            margin-bottom: 20px;
                        }
                        
                        .container {
                            border-radius: 5px;
                        }
                    `}
                </style>
                <div className="form-container inicia-sesion">
                    <form>
                        <h1>Bienvenido a SGCOMCAR</h1>
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="btn-iniciar-sesion"
                            >
                                Inicio
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="btn-iniciar-sesion"
                                >
                                    Iniciar Sesión
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="btn-registrarse"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-izquierda"></div>
                        <div className="toggle-panel toggle-derecha">
                            <img className="logo" src="https://i.ibb.co/NF4368g/logo-conservatorio-PNG.png" alt="Logo de la institución" />
                            <p className="vision">"Ser la institución musical por excelencia. Brindando asesoría permanente y acompañamiento humanista integral, a antiguas y nuevas generaciones de músicos de la región; y, generando en ellos compromiso hacia la formación académica, la investigación, la extensión comunitaria y la promoción, como herramientas para la transmisión generacional de los autores, sus obras y los valores que nos auto determinan culturalmente como pueblo".</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}