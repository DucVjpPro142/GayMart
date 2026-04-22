import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay — replace with real API call
    setTimeout(() => {
      localStorage.setItem('gaymart_user', JSON.stringify({ email, name: 'Khách hàng' }));
      setIsLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4"
      style={{ background: 'linear-gradient(135deg, #1a3a4d 0%, #316e91 50%, #5086a3 100%)' }}>
      
      {/* Background blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#316e91]/30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass-panel rounded-3xl p-8 md:p-10 shadow-2xl border-white/40 border">
          
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#316e91] to-[#1a3a4d] flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                G
              </div>
              <span className="font-extrabold text-3xl tracking-tight text-white drop-shadow">GayMart</span>
            </Link>
            <h1 className="text-2xl font-extrabold text-white mb-2 tracking-tight text-center">Chào mừng trở lại 👋</h1>
            <p className="text-white/70 font-body text-center text-sm">Đăng nhập để tiếp tục mua sắm</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                placeholder="Email của bạn"
                className="w-full bg-white/15 backdrop-blur-sm border border-white/30 focus:border-white/70 focus:bg-white/20 text-white placeholder:text-white/50 rounded-full py-4 pl-12 pr-5 outline-none transition-all font-body"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Mật khẩu"
                className="w-full bg-white/15 backdrop-blur-sm border border-white/30 focus:border-white/70 focus:bg-white/20 text-white placeholder:text-white/50 rounded-full py-4 pl-12 pr-14 outline-none transition-all font-body"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${remember ? 'bg-[#316e91] border-[#316e91]' : 'border-white/40 bg-white/10'}`}
                  onClick={() => setRemember(!remember)}
                >
                  {remember && <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span className="text-white/70 text-sm font-body group-hover:text-white transition-colors">Ghi nhớ đăng nhập</span>
              </label>
              <a href="#" className="text-sm text-white/70 font-body hover:text-white transition-colors underline underline-offset-4 decoration-white/30">
                Quên mật khẩu?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-[#316e91] hover:bg-gray-100 font-extrabold text-base py-4 rounded-full transition-all shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <><div className="w-5 h-5 border-2 border-[#316e91] border-t-transparent rounded-full animate-spin"></div> Đang đăng nhập...</>
              ) : (
                <><ShoppingBag size={20} /> ĐĂNG NHẬP</>
              )}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-grow h-[1px] bg-white/20"></div>
              <span className="text-white/50 text-xs font-body whitespace-nowrap">hoặc đăng nhập với</span>
              <div className="flex-grow h-[1px] bg-white/20"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 rounded-full transition-all text-sm hover:-translate-y-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 rounded-full transition-all text-sm hover:-translate-y-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <span className="text-white/60 font-body text-sm">Chưa có tài khoản? </span>
            <Link to="/register" className="text-white font-extrabold text-sm hover:underline underline-offset-2 inline-flex items-center gap-1">
              Đăng ký ngay <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
