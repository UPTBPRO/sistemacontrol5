import { useState, useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setPageLoaded(true);
    }, []);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <GuestLayout>
            <Head title="Iniciar sesión" />

            <div className={`transition-opacity duration-1000 ease-in ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Correo electrónico" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Contraseña" />

                        <div className="relative">
                            <TextInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 px-2 py-1 focus:outline-none"
                            >
                                {showPassword ? 'Ocultar' : 'Mostrar'}
                            </button>
                        </div>

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <label className="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded border-gray-300 focus:ring-gray-500 mr-2"
                            />
                            <span>Recuérdame</span>
                        </label>

                        <Link
                            href={route('password.request')}
                            className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            ¿Olvidó su contraseña?
                        </Link>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('register')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ¿Aún no tienes cuenta?
                        </Link>

                        <PrimaryButton
                            className="ms-4"
                            disabled={processing}
                            style={{ backgroundColor: '#00427E' }} // Cambiar el color aquí
                        >
                            Iniciar sesión
                        </PrimaryButton>
                    </div>

                    {/* Add a general error message for incorrect email or password */}
                    <InputError message={errors.general} className="mt-2" />
                </form>
            </div>
        </GuestLayout>
    );
}
