import React, { useState } from 'react';
import './Login.scss';
import './ToggleSwitch.scss';

const LoginForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email or phone number is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aqui você pode adicionar lógica adicional, como enviar dados para o servidor
            console.log('Formulário enviado');
        }
    };

    return (
        <section className="login-page">
            <div className="login-image">
                {/* Parte visual à esquerda */}
            </div>
            <div className="login-form">
                <div className="form-container">
                    <div className="logo">
                        <img src="/rocketLogo.jpeg" alt="Logo da Rocket." />
                        <p>Rocket</p>
                    </div>
                    <h2>Que bom te ver de novo</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="login">Login</label>
                            <input
                                type="text"
                                id="login"
                                placeholder="Email ou número de telefone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Insira a senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <div className="remember">
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={isChecked}
                                    onChange={handleToggle}
                                />
                                <span className="slider"></span>
                            </label>
                            <span>Lembrar de mim</span>
                            <a href="/forgot-password" className="forgot">Esqueceu a senha?</a>
                        </div>
                        <button type="submit" className="sign-in-btn">Sign in</button>
                        <div className="google-signin">
                            <button className="google-btn">
                                <img src="/googleLogo.svg" alt="Google" /> Or sign in with Google
                            </button>
                        </div>
                        <div className="sign-up">
                            <p>Não tem uma conta? <a href="/sign-up">Cadastre-se agora</a></p>
                        </div>
                    </form>
                    <div className="logo2">
                        <img src="/rocketLogo.jpeg" alt="Logo da Rocket." />
                        <p>Rocket</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;