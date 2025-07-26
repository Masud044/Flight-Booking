import { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button
        className="btn btn-link mt-4"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
      </button>
    </div>
  );
}
