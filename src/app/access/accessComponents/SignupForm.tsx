"use client";
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
// import AuthenticationService from '@/app/service/AuthenticationService';

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = ({}) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // const handleSignUp = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);
  //
  //   if (password !== confirmPassword) {
  //     return setError("Las contraseñas no coinciden.");
  //   }
  //
  //   try {
  //     await AuthenticationService.signUp(email, password);
  //     router.replace('/registro'); // o a donde quieras redirigir tras registrarse
  //   } catch (e: any) {
  //     console.error(e);
  //     setError(e?.message || 'Error al crear cuenta. Intente de nuevo.');
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <form
        // onSubmit={handleSignUp}
        className="flex flex-col gap-4 bg-gray-900 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl text-white font-semibold mb-4 text-center">
          Crear nueva cuenta
        </h2>

        <input
          type="email"
          placeholder="Introduzca su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded bg-black border border-gray-700 text-white placeholder-gray-400"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Introduzca su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded bg-black border border-gray-700 text-white placeholder-gray-400 w-full pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-200"
            tabIndex={-1}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>

        <input
          type="password"
          placeholder="Confirme su contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 rounded bg-black border border-gray-700 text-white placeholder-gray-400"
          required
        />

        {error && (
          <div className="flex flex-col text-red-500 text-sm text-center">
            <p>ERROR:</p>
            <p>{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="bg-white text-black py-2 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          Registrarse
        </button>

        <p className="text-xs text-white text-center">
          ¿Ya tienes cuenta? <a href="/login" className="underline">Inicia sesión aquí</a>.
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
