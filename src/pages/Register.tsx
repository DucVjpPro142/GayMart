import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('gaymart_user', JSON.stringify({ email, name }));
      setIsLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4"
      style={{ background: 'linear-gradient(135deg, #1a3a4d 0%, #316e91 50%, #5086a3 100%)' }}>
      
      {/* Background blobs */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#316e91]/30 blur-3xl pointer-events-none"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass-panel rounded-3xl p-8 md:p-10 shadow-2xl border-white/40 border">
          
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#316e91] to-[#1a3a4d] flex items-center justify-center text-white font-bold text-2xl shadow-lg">G</div>
              <span className="font-extrabold text-3xl tracking-tight text-white drop-shadow">GayMart</span>
            </Link>
            <h1 className="text-2xl font-extrabold text-white mb-2 tracking-tight text-center">Tạo tài khoản 🚀</h1>
            <p className="text-white/70 font-body text-center text-sm">Miễn phí hoàn toàn – Mua sắm ngay hôm nay</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"><User size={18} /></div>
              <input
                type="text"
                required
                placeholder="Họ và tên"
                className="w-full bg-white/15 backdrop-blur-sm border border-white/30 focus:border-white/70 focus:bg-white/20 text-white placeholder:text-white/50 rounded-full py-4 pl-12 pr-5 outline-none transition-all font-body"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"><Mail size={18} /></div>
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
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"><Lock size={18} /></div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Mật khẩu (ít nhất 8 ký tự)"
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

            <p className="text-white/50 text-xs font-body px-1">Bằng cách đăng ký, bạn đồng ý với <a href="#" className="underline text-white/70 hover:text-white">Điều khoản dịch vụ</a> và <a href="#" className="underline text-white/70 hover:text-white">Chính sách bảo mật</a> của GayMart.</p>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-[#316e91] hover:bg-gray-100 font-extrabold text-base py-4 rounded-full transition-all shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <><div className="w-5 h-5 border-2 border-[#316e91] border-t-transparent rounded-full animate-spin"></div> Đang tạo tài khoản...</>
              ) : (
                <><ShoppingBag size={20} /> TẠO TÀI KHOẢN NGAY</>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <span className="text-white/60 font-body text-sm">Đã có tài khoản? </span>
            <Link to="/login" className="text-white font-extrabold text-sm hover:underline underline-offset-2 inline-flex items-center gap-1">
              Đăng nhập <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
