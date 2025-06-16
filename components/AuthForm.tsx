import React from 'react';

type AuthFormProps = {
  type: 'register' | 'login';
  formData: {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    agreeTerms?: boolean;
  };
  error: string;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onNavigate: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  formData,
  error,
  isLoading,
  handleChange,
  handleSubmit,
  onNavigate,
}) => (
  <form onSubmit={handleSubmit} className="auth-form">
    {type === 'register' && (
      <>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name || ''}
          onChange={handleChange}
          required
        />
      </>
    )}
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
    />
    {type === 'register' && (
      <>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword || ''}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="agreeTerms"
            checked={!!formData.agreeTerms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
      </>
    )}
    <button type="submit" disabled={isLoading}>
      {type === 'register' ? 'Register' : 'Login'}
    </button>
    {error && <div className="error">{error}</div>}
    <button type="button" onClick={onNavigate}>
      {type === 'register' ? 'Go to Login' : 'Go to Register'}
    </button>
  </form>
);

export default AuthForm;