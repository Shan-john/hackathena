import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

// =========================================
// LOGIN PAGE — /login
// =========================================
export function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate('/home');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🏰</div>
        <h1 className="auth-title">HackAthena</h1>
        <h2 className="auth-subtitle">Welcome Back</h2>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="auth-btn primary">
            {loading ? 'Signing In...' : 'Login'}
          </button>
        </form>

        {message && <div className="auth-message error">{message}</div>}

        <div className="auth-divider"><span>OR</span></div>

        <p className="auth-switch">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign up here →</span>
        </p>
      </div>
    </div>
  );
}

// =========================================
// SIGNUP PAGE — /signup
// =========================================
export function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Error: Passwords do not match!');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage('Error: Password must be at least 6 characters.');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      setSuccess(true);
      setMessage('Account created successfully! You can now log in.');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page signup">
      <div className="auth-card">
        <div className="auth-logo">⚔️</div>
        <h1 className="auth-title">HackAthena</h1>
        <h2 className="auth-subtitle">Create Your Account</h2>

        <form onSubmit={handleSignup} className="auth-form">
          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Min. 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="auth-field">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading || success} className="auth-btn primary">
            {loading ? 'Creating Account...' : (success ? '✅ Created!' : 'Sign Up')}
          </button>
        </form>

        {message && (
          <div className={`auth-message ${success ? 'success' : 'error'}`}>{message}</div>
        )}

        <div className="auth-divider"><span>OR</span></div>

        <p className="auth-switch">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')}>Login here →</span>
        </p>
      </div>
    </div>
  );
}
