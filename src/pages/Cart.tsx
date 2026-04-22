import { useState } from 'react';
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialCart = [
  { id: 1, name: 'Nước ép cam tươi thanh mát', price: 30000, quantity: 2, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80' },
  { id: 2, name: 'Sữa chua dâu tây nguyên chất', price: 15000, quantity: 1, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80' },
  { id: 4, name: 'Combo snack khoai tây + nước ngọt', price: 45000, quantity: 1, img: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&q=80' },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState('');

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return { ...item, quantity: newQ > 0 ? newQ : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = 0; // Thay đổi logic giảm giá thực tế ở đây
  const shipping = subtotal > 100000 ? 0 : 15000;
  const total = subtotal - discount + shipping;

  return (
    <div className="pt-24 pb-16 min-h-[80vh]">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#316e91] to-[#5086a3] py-10 px-4 md:px-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Giỏ hàng của bạn</h1>
          <p className="text-white/80 font-medium">({cart.length} sản phẩm)</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {cart.length === 0 ? (
          <div className="glass-panel py-16 px-4 text-center rounded-3xl max-w-2xl mx-auto flex flex-col items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty Cart" className="w-48 opacity-50 mb-6 drop-shadow-lg" />
            <h2 className="text-2xl font-bold text-[#1a3a4d] mb-4">Giỏ hàng trống</h2>
            <p className="text-gray-500 mb-8 font-body">Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
            <Link to="/category" className="bg-[#316e91] hover:bg-[#1a3a4d] text-white font-bold py-3 px-8 rounded-full transition-all shadow-md inline-flex items-center gap-2">
              Tiếp tục mua sắm <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Cột trái: Danh sách sản phẩm */}
            <div className="w-full lg:w-[65%]">
              <div className="glass-panel rounded-3xl overflow-hidden shadow-lg border-white/50 mb-6">
                
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-white/40 bg-white/30 text-[#1a3a4d] font-bold text-sm uppercase tracking-wide">
                  <div className="col-span-5">Sản phẩm</div>
                  <div className="col-span-2 text-center">Đơn giá</div>
                  <div className="col-span-3 text-center">Số lượng</div>
                  <div className="col-span-2 text-right">Thành tiền</div>
                </div>

                {/* Danh sách */}
                <div className="divide-y divide-white/40">
                  {cart.map((item) => (
                    <div key={item.id} className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white/20 transition-colors">
                      {/* Product Info */}
                      <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                        <Link to={`/product/${item.id}`} className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/50 bg-white shadow-sm block relative group">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        </Link>
                        <div className="flex-grow">
                          <Link to={`/product/${item.id}`} className="font-bold text-[#1a3a4d] text-sm md:text-base line-clamp-2 hover:text-[#316e91] transition-colors">
                            {item.name}
                          </Link>
                          {/* Mobile Price */}
                          <div className="md:hidden font-bold text-[#316e91] mt-1">{item.price.toLocaleString('vi-VN')}đ</div>
                        </div>
                      </div>

                      {/* Unit Price (Desktop) */}
                      <div className="hidden md:block col-span-2 text-center font-bold text-gray-600">
                        {item.price.toLocaleString('vi-VN')}đ
                      </div>

                      {/* Quantity Control & Mobile Actions */}
                      <div className="col-span-1 md:col-span-3 flex justify-between md:justify-center items-center">
                        <div className="flex items-center glass-panel rounded-full overflow-hidden border border-white/60 bg-white/40 shadow-inner">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white hover:text-[#316e91] transition-colors">
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center font-bold text-[#1a3a4d] text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white hover:text-[#316e91] transition-colors">
                            <Plus size={14} />
                          </button>
                        </div>
                        {/* Mobile Delete */}
                        <button onClick={() => removeItem(item.id)} className="md:hidden text-gray-400 hover:text-red-500 transition-colors p-2 bg-white/50 rounded-full">
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {/* Total Price & Desktop Delete */}
                      <div className="hidden md:flex col-span-2 justify-end items-center gap-4">
                        <span className="font-extrabold text-red-500 text-lg">{(item.price * item.quantity).toLocaleString('vi-VN')}đ</span>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-white/50" title="Xóa">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nhập mã giảm giá */}
              <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between border-none shadow-sm">
                <div className="flex items-center gap-3 text-[#1a3a4d] w-full sm:w-auto">
                  <Ticket size={24} className="text-[#316e91]" />
                  <span className="font-bold whitespace-nowrap">Mã giảm giá</span>
                </div>
                <div className="flex w-full sm:w-auto flex-grow max-w-md relative">
                  <input 
                    type="text" 
                    placeholder="Nhập mã KM (VD: GAYMART50)" 
                    className="w-full bg-white/60 border border-white focus:border-[#316e91] rounded-full py-3 pl-6 pr-32 font-body text-sm outline-none shadow-inner"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button className="absolute right-1 top-1 bottom-1 bg-[#316e91] hover:bg-[#1a3a4d] text-white font-bold px-6 rounded-full text-sm transition-colors">
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>

            {/* Cột phải: Tổng quan đơn hàng */}
            <div className="w-full lg:w-[35%]">
              <div className="glass-panel p-6 md:p-8 rounded-3xl sticky top-28 shadow-xl border-t border-l border-white">
                <h3 className="text-xl font-extrabold text-[#1a3a4d] mb-6 pb-4 border-b border-gray-200/50">Tóm tắt đơn hàng</h3>
                
                <div className="space-y-4 mb-6 font-body text-gray-600">
                  <div className="flex justify-between">
                    <span>Tạm tính ({cart.length} món)</span>
                    <span className="font-bold text-[#1a3a4d]">{subtotal.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí giao hàng</span>
                    <span className="font-bold text-[#1a3a4d]">{shipping === 0 ? 'Miễn phí' : `${shipping.toLocaleString('vi-VN')}đ`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Giảm giá</span>
                      <span className="font-bold">-{discount.toLocaleString('vi-VN')}đ</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200/50 pt-6 mb-8">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-[#1a3a4d]">Tổng cộng</span>
                    <span className="text-3xl font-extrabold text-red-500">{total.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <p className="text-xs text-right text-gray-400 font-body">(Đã bao gồm VAT nếu có)</p>
                </div>

                <Link to="/success" className="w-full bg-[#316e91] hover:bg-[#1a3a4d] text-white font-bold text-lg py-4 rounded-full transition-all shadow-[0_8px_20px_rgba(49,110,145,0.3)] hover:shadow-[0_12px_25px_rgba(49,110,145,0.4)] hover:-translate-y-1 mb-6 flex justify-center items-center gap-2">
                  TIẾN HÀNH THANH TOÁN <ArrowRight size={20} />
                </Link>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-body">
                    <ShieldCheck size={14} className="text-green-500" /> Thanh toán an toàn và bảo mật
                  </div>
                  <div className="flex gap-3 justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                    {/* Placeholder payment icons */}
                    <div className="w-12 h-8 bg-white rounded shadow-sm border flex items-center justify-center text-[10px] font-bold text-[#1434CB]">VISA</div>
                    <div className="w-12 h-8 bg-white rounded shadow-sm border flex items-center justify-center text-[10px] font-bold text-[#A50064]">MOMO</div>
                    <div className="w-12 h-8 bg-white rounded shadow-sm border flex items-center justify-center text-[10px] font-bold text-[#00A1E4]">ZALO</div>
                    <div className="w-12 h-8 bg-white rounded shadow-sm border flex items-center justify-center text-[10px] font-bold text-gray-700">COD</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
