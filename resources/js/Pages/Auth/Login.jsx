import { useState, useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);

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

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Iniciar Sesión</h2>

                <div className="mb-4">
                    <InputLabel htmlFor="email" value="Correo electrónico" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-4">
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

                <div className="mb-4">
                    <label className="flex items-center text-sm text-gray-600">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded border-gray-300 focus:ring-gray-500"
                        />
                        <span className="ml-2">Recuérdame</span>
                    </label>
                </div>

                <div className="flex items-center justify-center mb-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none mr-4"
                        >
                            ¿Olvidó su contraseña?
                        </Link>
                    )}

                    <Link
                        href={route('register')}
                        className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
                    >
                        ¿Aún no tienes cuenta?
                    </Link>
                </div>

                <div className="flex items-center justify-center">
                    <PrimaryButton className="bg-green-500 hover:bg-green-600 focus:outline-none">
                        Iniciar sesión
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
