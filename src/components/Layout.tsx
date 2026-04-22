import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, User, LogOut } from 'lucide-react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(() => {
    const stored = localStorage.getItem('gaymart_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('gaymart_user');
    setUser(null);
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <div className="font-sans min-h-screen relative overflow-hidden flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#316e91] to-[#5086a3] flex items-center justify-center text-white font-bold text-xl shadow-lg">
              G
            </div>
            <span className="font-bold text-2xl tracking-tight text-[#1a3a4d]">GayMart</span>
          </Link>

          <nav className="hidden md:flex gap-8 text-[#1a3a4d] font-medium">
            <Link to="/" className="hover:text-[#316e91] transition-colors">Trang chủ</Link>
            <Link to="/category" className="hover:text-[#316e91] transition-colors">Danh mục</Link>
            <a href="#" className="hover:text-[#316e91] transition-colors">Khuyến mãi</a>
            <a href="#" className="hover:text-[#316e91] transition-colors">Liên hệ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/search" className="p-2 text-[#1a3a4d] hover:bg-white/20 rounded-full transition-colors hidden md:block">
              <Search size={20} />
            </Link>
            <Link to="/cart" className="relative p-2 text-[#1a3a4d] hover:bg-white/20 rounded-full transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                3
              </span>
            </Link>

            {/* Auth buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 glass-card border-none py-2 pl-3 pr-4 rounded-full hover:bg-white/70 transition-colors shadow-sm"
                >
                  <div className="w-7 h-7 rounded-full bg-[#316e91] flex items-center justify-center text-white text-xs font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-[#1a3a4d] font-bold text-sm hidden md:block">{user.name}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 top-12 glass-panel rounded-2xl shadow-xl py-2 min-w-[180px] z-50 border border-white/50">
                    <div className="px-4 py-3 border-b border-gray-200/50">
                      <p className="font-bold text-[#1a3a4d] text-sm">{user.name}</p>
                      <p className="text-gray-500 text-xs font-body truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50/50 transition-colors text-sm font-bold"
                    >
                      <LogOut size={16} /> Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 bg-[#316e91] hover:bg-[#1a3a4d] text-white font-bold text-sm py-2 px-5 rounded-full transition-all shadow-md"
              >
                <User size={16} /> Đăng nhập
              </Link>
            )}

            <button className="p-2 text-[#1a3a4d] hover:bg-white/20 rounded-full transition-colors md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1a3a4d] pt-16 pb-8 px-4 md:px-8 text-white/70 relative overflow-hidden mt-auto">
        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-[#316e91] blur-[150px] opacity-20 rounded-full"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#316e91] to-[#5086a3] flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/20">
                  G
                </div>
                <span className="font-bold text-3xl tracking-tight text-white">GayMart</span>
              </div>
              <p className="text-sm font-body leading-relaxed mb-6 opacity-80">
                Hệ thống siêu thị tiện lợi thế hệ mới. Tiết kiệm thời gian, nâng tầm cuộc sống. Trải nghiệm mua sắm mượt mà với ứng dụng công nghệ hiện đại.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-2 inline-block">Danh mục</h5>
              <ul className="space-y-3 text-sm font-body">
                <li><Link to="/category" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Đồ uống</Link></li>
                <li><Link to="/category" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Snack & Bánh kẹo</Link></li>
                <li><Link to="/category" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Thực phẩm tươi sống</Link></li>
                <li><Link to="/category" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Hàng gia dụng</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-2 inline-block">Chính sách</h5>
              <ul className="space-y-3 text-sm font-body">
                <li><a href="#" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Chính sách giao hàng</a></li>
                <li><a href="#" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Chính sách đổi trả</a></li>
                <li><a href="#" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Điều khoản dịch vụ</a></li>
                <li><a href="#" className="hover:text-[#94cdf5] hover:translate-x-1 inline-block transition-transform">Bảo mật thông tin</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-2 inline-block">Liên hệ</h5>
              <ul className="space-y-4 text-sm font-body">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"><Search size={14} /></div>
                  Hotline: 1900 xxxx
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"><Search size={14} /></div>
                  support@gaymart.vn
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"><Search size={14} /></div>
                  123 Đường XYZ, TP.HCM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body">
            <p>© 2026 GayMart. All rights reserved.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#316e91] hover:text-white cursor-pointer transition-all border border-white/10 text-white"><span className="font-bold">F</span></div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#316e91] hover:text-white cursor-pointer transition-all border border-white/10 text-white"><span className="font-bold">I</span></div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#316e91] hover:text-white cursor-pointer transition-all border border-white/10 text-white"><span className="font-bold">T</span></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
