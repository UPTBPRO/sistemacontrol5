import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register({ alreadyRegistered }) {
    const [logoHovered, setLogoHovered] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [alreadyRegisteredError, setAlreadyRegisteredError] = useState(alreadyRegistered);

    useEffect(() => {
        setPageLoaded(true);
    }, []);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    useEffect(() => {
        setPasswordMatchError(data.password !== data.password_confirmation);
    }, [data.password, data.password_confirmation]);

    const submit = (e) => {
        e.preventDefault();

        // Verificar si las contraseñas coinciden
        if (data.password !== data.password_confirmation) {
            setPasswordMatchError(true);
            return;
        }
        // Verificar si la contraseña tiene menos de 8 caracteres
        if (data.password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }
        // Verificar si el correo electrónico ya está registrado
        if (alreadyRegistered) {
            alert('El correo electrónico ya está registrado.');
            return;
        }
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Registro" />

            <div className={`transition-opacity duration-1000 ease-in ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                {alreadyRegisteredError && (
                    <div className="mt-4 text-sm text-red-600">Usted ya posee una cuenta.</div>
                )}

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nombre y Apellido" />

                        <TextInput
                            id="nombre"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

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
                        <InputLabel htmlFor="password" value="Contraseña (minimo 8 caracteres)" />

                        <TextInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" />

                        <TextInput
                            id="password_confirmation"
                            type={showPassword ? 'text' : 'password'}
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        {passwordMatchError && (
                            <div className="mt-1 text-sm text-red-600">Las contraseñas no coinciden.</div>
                        )}

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="mt-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <span className="ml-2">Mostrar contraseñas</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ¿Ya tienes una cuenta?
                        </Link>

                        <PrimaryButton
                            className="ms-4"
                            disabled={processing}
                            style={{ backgroundColor: '#00427E' }} // Cambiar el color aquí
                        >
                            Registrar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}

