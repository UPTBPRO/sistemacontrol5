import { Link, Head } from '@inertiajs/react';

export default function SimpleMenu({ auth, laravelVersion, phpVersion, backgroundImage }) {
    const bgStyle = {
        backgroundImage: `url(https://docplayer.es/docs-images/80/81639584/images/35-0.jpg)`,//recuerda cambiar la imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const transparentBgStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Ajusta el valor alpha para cambiar la transparencia
        backdropFilter: 'blur(5px)', // Ajusta el valor para cambiar el efecto de difuminación
        border: '1px solid #e2e8f0', // Ajusta el color y grosor del borde
    };

    return (
        <>
            <Head title="Bienvenido" />
            <div className="min-h-screen flex flex-col items-center justify-center" style={bgStyle}>
                {/* Bienvenida */}
                <div className="max-w-md w-full p-6 rounded-md shadow-md transform transition-transform duration-500 hover:scale-105 mb-8" style={transparentBgStyle}>
                    <h1 className="text-3xl font-semibold mb-6">Bienvenido a SGCMCAR</h1>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="block bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-center transition-colors duration-300"
                        >
                            Inicio
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 text-center transition-colors duration-300"
                            >
                                Iniciar sesión
                            </Link>

                            <Link
                                href={route('register')}
                                className="block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-center transition-colors duration-300"
                            >
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>

                {/* Misión y Visión en una fila */}
                <div className="flex flex-wrap justify-center">
                    {/* Misión */}
                    <div className="max-w-md w-full sm:w-1/2 p-6 rounded-md shadow-md transform transition-transform duration-500 hover:scale-105 mb-4" style={transparentBgStyle}>
                        <h2 className="text-2xl font-semibold mb-4">Misión</h2>
                        <p>
                            Otorgarle carácter de sustentabilidad y sostenibilidad al legado patrimonial e institucional, en el ámbito del estado Bolívar; sin perder de vista la plena libertad y potestad de creación de nuevas obras con marcada innovación, tendencias y estilos. Brindando sin barreras, igualdad de oportunidades de formación académica - musical, a todo ser sensible y con talento en este universal género artístico.
                        </p>
                    </div>

                    {/* Visión */}
                    <div className="max-w-md w-full sm:w-1/2 p-6 rounded-md shadow-md transform transition-transform duration-500 hover:scale-105 mb-4" style={transparentBgStyle}>
                        <h2 className="text-2xl font-semibold mb-4">Visión</h2>
                        <p>
                            Ser la institución musical por excelencia. Brindando asesoría permanente y acompañamiento humanista integral, a antiguas y nuevas generaciones de músicos de la región; y, generando en ellos compromiso hacia la formación académica, la investigación, la extensión comunitaria y la promoción, como herramientas para la transmisión generacional de los autores, sus obras y los valores que nos auto determinan culturalmente como pueblo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}


