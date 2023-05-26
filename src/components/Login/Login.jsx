import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signInUser, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleCreateUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        setError('');

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError('Email or password was wrong !');
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogleProvider = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const githubProvider = new GithubAuthProvider();
    const loginWithGithubProvider = () => {
        loginWithGithub(githubProvider)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleCreateUser} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className='text-red-500 text-center font-semibold'>{error}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p>not have an account <Link to="/register"><button className="btn btn-link">register</button></Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='mt-10'>
                            <button onClick={loginWithGoogleProvider} className='flex items-center gap-x-2 w-full justify-center border rounded-md p-2'><FcGoogle></FcGoogle> Login with google</button>
                            <button onClick={loginWithGithubProvider} className='flex items-center gap-x-2 w-full justify-center border rounded-md p-2 mt-2'><GoMarkGithub></GoMarkGithub> Login with github</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;