import { ShoppingCart, Zap, ThumbsUp, Leaf, CreditCard, Coffee, Package, Snowflake, Flame, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Đồ uống', icon: Coffee },
  { name: 'Snack', icon: Package },
  { name: 'Gia vị', icon: Flame },
  { name: 'Đồ gia dụng', icon: Utensils },
  { name: 'Hàng đông lạnh', icon: Snowflake },
];

const products = [
  { id: 1, name: 'Bánh mì nướng bơ tỏi đặc biệt GayMart', price: 25000, oldPrice: 35000, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80' },
  { id: 2, name: 'Sữa chua dâu tây nguyên chất', price: 15000, oldPrice: 18000, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80' },
  { id: 3, name: 'Nước ép cam tươi thanh mát', price: 30000, oldPrice: 40000, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80' },
  { id: 4, name: 'Combo snack khoai tây + nước ngọt', price: 45000, oldPrice: 55000, img: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&q=80' },
  { id: 5, name: 'Cà phê sữa đá pha sẵn', price: 22000, oldPrice: 25000, img: 'https://images.unsplash.com/photo-1461023058943-07cb1ce89b02?w=500&q=80' },
  { id: 6, name: 'Mì cay Hàn Quốc 7 cấp độ', price: 28000, oldPrice: 32000, img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&q=80' },
  { id: 7, name: 'Xúc xích phô mai nướng', price: 18000, oldPrice: 20000, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80' },
  { id: 8, name: 'Kem socola bạc hà', price: 35000, oldPrice: 45000, img: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=500&q=80' },
];

export default function Home() {
  return (
    <>
      {/* 2. Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-[#316e91] via-[#5086a3] to-[#8fb8ce] -z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
        
        <div className="container mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto shadow-2xl border-white/40">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white/30 text-white font-medium text-sm mb-6 backdrop-blur-md border border-white/20">
                🚀 Siêu thị tiện lợi thế hệ mới
              </span>
              <h1 className="text-4xl md:text-[60px] font-extrabold leading-[1.1] text-white mb-6 tracking-tight">
                Mua sắm tiện lợi –<br className="hidden md:block"/> Giao nhanh trong 30 phút
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 font-body max-w-xl">
                Đầy đủ nhu yếu phẩm, giá tốt mỗi ngày. Không cần đi xa, GayMart mang cả thế giới đến trước cửa nhà bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-white text-[#316e91] font-bold text-lg px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all">
                  Mua ngay
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                  Xem danh mục
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative hidden md:block">
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=800&auto=format&fit=crop" 
                  alt="Shopping Groceries" 
                  className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10 border-4 border-white/30"
                />
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-green-500 rounded-full p-2 text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Giao hàng</p>
                    <p className="font-bold text-[#1a3a4d]">15 phút nữa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Danh mục nhanh */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar px-2">
            {categories.map((cat, idx) => (
              <button key={idx} className="glass-card flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full min-w-[160px] group cursor-pointer border-none shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#316e91]/10 flex items-center justify-center text-[#316e91] group-hover:bg-[#316e91] group-hover:text-white transition-colors">
                  <cat.icon size={20} />
                </div>
                <span className="font-bold text-[#1a3a4d] group-hover:text-[#316e91] transition-colors">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sản phẩm nổi bật */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a4d] mb-2">Sản phẩm nổi bật</h2>
              <p className="text-gray-500 font-body">Những món đồ được yêu thích nhất hôm nay</p>
            </div>
            <a href="#" className="text-[#316e91] font-bold hover:underline hidden md:block">Xem tất cả →</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="glass-card rounded-3xl p-3 md:p-4 group flex flex-col h-full cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                    -{Math.round((1 - product.price/product.oldPrice)*100)}%
                  </div>
                </div>
                <h3 className="font-bold text-[#1a3a4d] text-sm md:text-base line-clamp-2 mb-2 flex-grow group-hover:text-[#316e91] transition-colors">
                  {product.name}
                </h3>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-extrabold text-lg md:text-xl text-red-500">{product.price.toLocaleString('vi-VN')}đ</span>
                    <span className="text-sm text-gray-400 line-through">{product.oldPrice.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <button className="w-full bg-[#f4f7f9] hover:bg-[#316e91] text-[#316e91] hover:text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    <span className="hidden md:inline">Thêm vào giỏ</span>
                    <span className="md:hidden">Thêm</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Khuyến mãi */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="glass-card rounded-[40px] overflow-hidden relative border-none shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay object-cover"></div>
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-8 md:mb-0 text-center md:text-left">
                <span className="bg-white/30 px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-md border border-white/40 uppercase tracking-wider mb-6 inline-block shadow-sm">
                  ⚡ Flash Sale Cuối Tuần
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">Mua 2 Tặng 1</h2>
                <p className="text-lg md:text-xl opacity-90 max-w-md drop-shadow-sm font-body">Áp dụng cho toàn bộ đồ uống đóng chai và snack khoai tây. Số lượng có hạn!</p>
              </div>
              <div className="glass-panel p-6 rounded-3xl text-center min-w-[220px] shadow-2xl border-white/50 bg-white/40">
                <p className="text-[#1a3a4d] font-bold text-sm mb-2 uppercase tracking-wide">Kết thúc sau</p>
                <div className="flex gap-2 justify-center text-4xl font-extrabold text-[#1a3a4d]">
                  <span>02</span><span className="opacity-50">:</span><span>45</span><span className="opacity-50">:</span><span>10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. USP / Lợi ích */}
      <section className="py-16 px-4 md:px-8 bg-white/50 backdrop-blur-xl border-y border-white/60 mt-12 shadow-[0_0_40px_rgba(49,110,145,0.05)]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 glass-card rounded-3xl hover:bg-white/80 transition-all border-none shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#316e91]/10 text-[#316e91] flex items-center justify-center mb-4 shadow-inner">
                <Zap size={32} strokeWidth={2.5} />
              </div>
              <h4 className="font-bold text-lg text-[#1a3a4d] mb-2">Giao nhanh</h4>
              <p className="text-gray-500 font-body text-sm">Nhận hàng trong 30 phút</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass-card rounded-3xl hover:bg-white/80 transition-all border-none shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#316e91]/10 text-[#316e91] flex items-center justify-center mb-4 shadow-inner">
                <ThumbsUp size={32} strokeWidth={2.5} />
              </div>
              <h4 className="font-bold text-lg text-[#1a3a4d] mb-2">Giá tốt</h4>
              <p className="text-gray-500 font-body text-sm">Bình ổn giá mỗi ngày</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass-card rounded-3xl hover:bg-white/80 transition-all border-none shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#316e91]/10 text-[#316e91] flex items-center justify-center mb-4 shadow-inner">
                <Leaf size={32} strokeWidth={2.5} />
              </div>
              <h4 className="font-bold text-lg text-[#1a3a4d] mb-2">Hàng tươi</h4>
              <p className="text-gray-500 font-body text-sm">Đảm bảo chất lượng 100%</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass-card rounded-3xl hover:bg-white/80 transition-all border-none shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#316e91]/10 text-[#316e91] flex items-center justify-center mb-4 shadow-inner">
                <CreditCard size={32} strokeWidth={2.5} />
              </div>
              <h4 className="font-bold text-lg text-[#1a3a4d] mb-2">Thanh toán</h4>
              <p className="text-gray-500 font-body text-sm">Đa dạng hình thức trả</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
