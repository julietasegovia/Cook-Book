import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { supabase } from './supabase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if(password !== confirm) {
            setError("Passwords don't match!");
            return;
        }

        if(password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        const {error} = await supabase.auth.signUp({email, password});
        if(error){
            setError(error.message);
        }else{
            setSuccess('Account created!');
        }

    };

    return (
        <div className='bg-white h-100vh flex flex-col items-center mt-28'>
      
            <div className='w-[300px] flex flex-col border border-gray-300 rounded p-5'>
                <Link to='/'>
                    <p className='text-xl'>Cook-Book</p>
                </Link>
                <h1 className='text-3xl font-bold mb-4'>Create Your Account</h1>
                {error && (
                    <div className='flex items-center gap-2 bg-red-100 border border-red-400 text-red-700 text-sm rounded px-3 py-2 mb-3'>
                        <span>⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                {success && (
                    <div className='flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 text-sm rounded px-3 py-2 mb-3'>
                        <span>✅</span>
                        <span>{success}</span>
                    </div>
                )}

                <form onSubmit={register} className='flex flex-col gap-2'>
                    <h5 className='font-semibold'>E-mail</h5>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='border border-gray-400 rounded px-2 py-1 w-full'
                        required
                    />
                    <h5 className='font-semibold'>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='border border-gray-400 rounded px-2 py-1 w-full'
                        required
                    />
                    <h5 className='font-semibold'>Confirm Password</h5>
                    <input
                        type='password'
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                        className='border border-gray-400 rounded px-2 py-1 w-full'
                        required
                    />
                    <button
                        type='submit'
                        className='bg-[#f0c14b] border border-[#a88734] rounded w-full py-1 mt-2 font-semibold'
                    >
                        Create your Amazon Account
                    </button>
                </form>
                <p className='mt-4 text-sm'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-orange-500 hover:underline'>Sign in</Link>
                </p>
            </div>
    </div>
    )
}

export default Signup
