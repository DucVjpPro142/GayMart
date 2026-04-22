import { Ticket, Copy, CheckCircle2, Clock, Gift, Percent, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockVouchers = [
  { id: 1, title: 'Giảm 50K cho đơn từ 200K', code: 'GAYMART50', exp: 'Còn 2 ngày', type: 'Giảm giá', color: 'from-orange-400 to-red-500' },
  { id: 2, title: 'Freeship tối đa 30K', code: 'FREESHIP30', exp: 'Còn 5 ngày', type: 'Vận chuyển', color: 'from-[#316e91] to-[#5086a3]' },
  { id: 3, title: 'Giảm 10% tối đa 100K', code: 'NEW10', exp: 'Hết hạn hôm nay', type: 'Giảm giá', color: 'from-green-400 to-emerald-600' },
  { id: 4, title: 'Tặng túi Eco', code: 'ECOGIFT', exp: 'Còn 1 tuần', type: 'Quà tặng', color: 'from-purple-400 to-indigo-500' },
];

const mockDeals = [
  { id: 1, name: 'Sữa chua uống vị dâu', price: 15000, oldPrice: 22000, img: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=500&q=80', sold: 85 },
  { id: 2, name: 'Nước khoáng có ga Perrier', price: 35000, oldPrice: 50000, img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=500&q=80', sold: 42 },
  { id: 3, name: 'Combo Bánh mì & Cà phê', price: 40000, oldPrice: 55000, img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&q=80', sold: 95 },
];

export default function Promotions() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#f7fafc]">
      {/* Hero Banner */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1a3a4d] to-[#316e91] p-8 md:p-12 shadow-xl border border-white/20">
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[200%] bg-white/10 blur-[100px] rounded-full pointer-events-none transform -rotate-45"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="text-white max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 backdrop-blur-md">
                <Gift size={14} /> Khuyến mãi đặc biệt
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                Tháng Sinh Nhật <br /> <span className="text-[#94cdf5]">Giảm Lên Đến 50%</span>
              </h1>
              <p className="text-white/80 font-body text-lg mb-8">
                Cùng GayMart chào đón tuổi mới với hàng ngàn ưu đãi hấp dẫn. Mã freeship mỗi ngày và nhiều quà tặng giá trị.
              </p>
              <button className="bg-white text-[#1a3a4d] hover:bg-[#eef1f3] font-extrabold py-3 px-8 rounded-full transition-all shadow-[0_8px_20px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                Săn ưu đãi ngay
              </button>
            </div>
            
            <div className="hidden lg:block relative w-72 h-72">
              {/* Fake 3D decorative element */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#94cdf5] to-transparent rounded-full opacity-30 animate-pulse blur-2xl"></div>
              <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/40 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl">
                <Percent size={80} className="text-white opacity-80" />
              </div>
              <div className="absolute inset-4 bg-white/10 backdrop-blur-md border border-white/40 rounded-3xl -rotate-6 shadow-2xl flex items-center justify-center">
                 <Ticket size={100} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Kho Voucher */}
        <div className="mb-16">
          <div className="flex items-end justify-between mb-8 border-b border-gray-200/50 pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a4d] flex items-center gap-3">
                <Ticket className="text-[#316e91]" /> Kho Voucher
              </h2>
              <p className="text-gray-500 font-body mt-1">Lưu ngay mã giảm giá để sử dụng ở bước thanh toán</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockVouchers.map((voucher) => (
              <div key={voucher.id} className="glass-card bg-white rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className={`h-24 bg-gradient-to-r ${voucher.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                  <div className="relative z-10 text-white font-extrabold text-xl text-center px-4">
                    {voucher.title}
                  </div>
                  {/* Decorative cutouts */}
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white rounded-full"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white rounded-full"></div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">{voucher.type}</span>
                    <div className="flex items-center justify-between mb-4 bg-[#f4f7f9] p-3 rounded-xl border border-gray-100">
                      <span className="font-extrabold text-[#1a3a4d] tracking-widest">{voucher.code}</span>
                      <button 
                        onClick={() => handleCopy(voucher.code)}
                        className={`p-2 rounded-lg transition-colors ${copiedCode === voucher.code ? 'bg-green-100 text-green-600' : 'bg-white text-[#316e91] shadow-sm hover:bg-[#316e91] hover:text-white'}`}
                        title="Sao chép"
                      >
                        {copiedCode === voucher.code ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-body font-medium text-red-500 bg-red-50 p-2 rounded-lg justify-center mt-auto">
                    <Clock size={14} /> {voucher.exp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flash Sale / Deals */}
        <div>
          <div className="flex items-end justify-between mb-8 border-b border-gray-200/50 pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a4d] flex items-center gap-3">
                <Percent className="text-red-500" /> Giá Sốc Mỗi Ngày
              </h2>
              <p className="text-gray-500 font-body mt-1">Số lượng có hạn. Mua ngay kẻo lỡ!</p>
            </div>
            <Link to="/category" className="hidden sm:flex text-[#316e91] font-bold text-sm items-center gap-1 hover:underline">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockDeals.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="glass-card bg-white rounded-2xl p-4 flex flex-row items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/60">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg shadow-sm">
                    -{Math.round((1 - product.price/product.oldPrice)*100)}%
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between h-full py-1">
                  <div>
                    <h3 className="font-bold text-[#1a3a4d] text-sm line-clamp-2 mb-1 group-hover:text-[#316e91] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-extrabold text-lg text-red-500">{product.price.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <span className="text-xs text-gray-400 line-through mb-2 block">{product.oldPrice.toLocaleString('vi-VN')}đ</span>
                  </div>
                  
                  {/* Progress bar for "Sold" */}
                  <div className="mt-auto">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2.5 rounded-full" style={{ width: `${product.sold}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Đã bán {product.sold}%</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <Link to="/category" className="sm:hidden mt-6 bg-[#f4f7f9] text-[#316e91] font-bold text-sm items-center justify-center gap-1 hover:bg-[#eef1f3] py-3 rounded-xl flex">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
