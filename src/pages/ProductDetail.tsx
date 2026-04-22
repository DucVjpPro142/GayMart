import { useState } from 'react';
import { ShoppingCart, Star, Minus, Plus, ShieldCheck, Truck, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const mockProduct = {
  id: 1,
  name: 'Nước ép cam tươi thanh mát',
  price: 30000,
  oldPrice: 40000,
  img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80',
    'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=800&q=80',
    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
  ],
  rating: 4.8,
  reviews: 128,
  description: 'Được ép từ 100% cam tươi nguyên chất, không thêm đường. Nguồn cung cấp Vitamin C dồi dào, giúp tăng cường sức đề kháng và thanh lọc cơ thể mỗi ngày.',
  details: 'Nước ép cam nguyên chất được đóng chai thủy tinh cao cấp, bảo quản nhiệt độ lạnh để giữ nguyên vẹn hương vị và dưỡng chất. Thích hợp dùng chung với bữa sáng hoặc giải khát giữa ngày.',
  ingredients: '100% Cam vắt tươi, không chất bảo quản, không hương liệu nhân tạo.',
};

const relatedProducts = [
  { id: 2, name: 'Sữa chua dâu tây nguyên chất', price: 15000, oldPrice: 18000, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80', rating: 4.5, reviews: 89 },
  { id: 3, name: 'Trà đào cam sả', price: 28000, oldPrice: 35000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80', rating: 4.8, reviews: 210 },
  { id: 4, name: 'Nước khoáng có ga Perrier', price: 45000, oldPrice: 50000, img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=500&q=80', rating: 5, reviews: 56 },
  { id: 6, name: 'Sinh tố bơ xay', price: 35000, oldPrice: 40000, img: 'https://images.unsplash.com/photo-1623065422900-018226685984?w=500&q=80', rating: 4.9, reviews: 150 },
];

export default function ProductDetail() {
  useParams(); // keep it imported but ignore value to fix unused variable
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');
  const [activeImg, setActiveImg] = useState(0);

  // In a real app, you would fetch product data based on the 'id' parameter here.
  const product = mockProduct;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="glass-panel py-3 px-6 rounded-xl mb-8 flex items-center gap-2 text-sm font-body shadow-sm w-fit">
          <Link to="/" className="text-gray-500 hover:text-[#316e91] transition-colors flex items-center gap-1"><ArrowLeft size={16}/> Trang chủ</Link>
          <span className="text-gray-400">/</span>
          <Link to="/category" className="text-gray-500 hover:text-[#316e91] transition-colors">Đồ uống</Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#1a3a4d] font-bold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </div>

        {/* Product Overview */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Cột trái: Hình ảnh */}
          <div className="w-full lg:w-[45%]">
            <div className="glass-card rounded-3xl p-4 mb-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/50 flex items-center justify-center">
                <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                {product.oldPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-md">
                    -{Math.round((1 - product.price/product.oldPrice)*100)}%
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImg(idx)}
                  className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${activeImg === idx ? 'border-[#316e91] shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Cột phải: Thông tin */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a3a4d] mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1 bg-[#316e91]/10 px-3 py-1.5 rounded-full">
                <span className="flex text-yellow-500"><Star size={16} fill="currentColor"/></span>
                <span className="font-bold text-[#1a3a4d] text-sm ml-1">{product.rating}</span>
              </div>
              <span className="text-gray-500 font-body text-sm underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-[#316e91]">
                Xem {product.reviews} đánh giá
              </span>
              <div className="h-4 w-[1px] bg-gray-300"></div>
              <span className="text-green-600 font-bold text-sm bg-green-100 px-3 py-1 rounded-full">Còn hàng</span>
            </div>

            <div className="mb-8 p-6 glass-panel rounded-2xl border-l-4 border-l-[#316e91]">
              <div className="flex items-end gap-4 flex-wrap">
                <span className="text-4xl font-extrabold text-red-500">{product.price.toLocaleString('vi-VN')}đ</span>
                {product.oldPrice > product.price && (
                  <span className="text-xl text-gray-400 line-through mb-1">{product.oldPrice.toLocaleString('vi-VN')}đ</span>
                )}
              </div>
            </div>

            <p className="text-gray-600 font-body text-base md:text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center">
                <span className="text-gray-500 font-bold mr-4 text-sm uppercase tracking-wide">Số lượng</span>
                <div className="flex items-center glass-panel rounded-full overflow-hidden border border-gray-200">
                  <button onClick={decreaseQuantity} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white transition-colors">
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-bold text-[#1a3a4d]">{quantity}</span>
                  <button onClick={increaseQuantity} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white transition-colors">
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex-1 bg-[#316e91] hover:bg-[#1a3a4d] text-white font-bold text-lg py-4 rounded-full transition-all shadow-[0_8px_20px_rgba(49,110,145,0.3)] hover:shadow-[0_12px_25px_rgba(49,110,145,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3">
                <ShoppingCart size={22} /> Thêm vào giỏ
              </button>
              <button className="flex-1 bg-white text-[#316e91] border-2 border-[#316e91] font-bold text-lg py-4 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center">
                Mua ngay
              </button>
              <div className="flex gap-2">
                <button className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                  <Heart size={22} />
                </button>
                <button className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gray-500 hover:text-[#316e91] hover:bg-white transition-all shadow-sm">
                  <Share2 size={22} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/40 p-4 rounded-xl border border-white/60">
                <div className="text-[#316e91] bg-white p-2 rounded-lg shadow-sm"><Truck size={20}/></div>
                <div>
                  <h4 className="font-bold text-sm text-[#1a3a4d]">Giao siêu tốc 30p</h4>
                  <p className="text-xs text-gray-500 font-body">Khu vực nội thành</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/40 p-4 rounded-xl border border-white/60">
                <div className="text-[#316e91] bg-white p-2 rounded-lg shadow-sm"><ShieldCheck size={20}/></div>
                <div>
                  <h4 className="font-bold text-sm text-[#1a3a4d]">Đổi trả miễn phí</h4>
                  <p className="text-xs text-gray-500 font-body">Trong vòng 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Thông tin chi tiết */}
        <div className="glass-panel rounded-3xl overflow-hidden mb-16 shadow-lg border-white/50">
          <div className="flex border-b border-gray-200/50 bg-white/30 backdrop-blur-md">
            <button 
              onClick={() => setActiveTab('desc')}
              className={`flex-1 py-5 px-4 font-bold text-center transition-all ${activeTab === 'desc' ? 'text-[#316e91] border-b-4 border-[#316e91] bg-white/50' : 'text-gray-500 hover:text-[#1a3a4d] hover:bg-white/20'}`}
            >
              Mô tả sản phẩm
            </button>
            <button 
              onClick={() => setActiveTab('ing')}
              className={`flex-1 py-5 px-4 font-bold text-center transition-all ${activeTab === 'ing' ? 'text-[#316e91] border-b-4 border-[#316e91] bg-white/50' : 'text-gray-500 hover:text-[#1a3a4d] hover:bg-white/20'}`}
            >
              Thành phần
            </button>
            <button 
              onClick={() => setActiveTab('rev')}
              className={`flex-1 py-5 px-4 font-bold text-center transition-all ${activeTab === 'rev' ? 'text-[#316e91] border-b-4 border-[#316e91] bg-white/50' : 'text-gray-500 hover:text-[#1a3a4d] hover:bg-white/20'}`}
            >
              Đánh giá (128)
            </button>
          </div>
          
          <div className="p-8 md:p-12 min-h-[300px] bg-white/20">
            {activeTab === 'desc' && (
              <div className="prose prose-lg max-w-none font-body text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-bold text-[#1a3a4d] mb-4">Thông tin chi tiết</h3>
                <p>{product.details}</p>
                <p className="mt-4">Quy trình sản xuất được kiểm định nghiêm ngặt, đảm bảo vệ sinh an toàn thực phẩm. Bao bì thân thiện với môi trường có thể tái chế.</p>
              </div>
            )}
            {activeTab === 'ing' && (
              <div className="prose prose-lg max-w-none font-body text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-bold text-[#1a3a4d] mb-4">Thành phần</h3>
                <p>{product.ingredients}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Vitamin C: 45mg/100ml</li>
                  <li>Đường tự nhiên: 8g/100ml</li>
                  <li>Năng lượng: 45 kcal/100ml</li>
                </ul>
              </div>
            )}
            {activeTab === 'rev' && (
              <div className="flex items-center justify-center h-[200px] text-gray-500 font-body">
                Tính năng đánh giá đang được cập nhật...
              </div>
            )}
          </div>
        </div>

        {/* Sản phẩm liên quan */}
        <div>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-extrabold text-[#1a3a4d]">Sản phẩm liên quan</h2>
            <Link to="/category" className="text-[#316e91] font-bold hover:underline hidden md:block">Xem thêm →</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="glass-card rounded-2xl p-3 md:p-4 group flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {product.oldPrice > product.price && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                      -{Math.round((1 - product.price/product.oldPrice)*100)}%
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-[#1a3a4d] text-sm md:text-base line-clamp-2 mb-2 flex-grow group-hover:text-[#316e91] transition-colors">
                  {product.name}
                </h3>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-extrabold text-lg text-red-500">{product.price.toLocaleString('vi-VN')}đ</span>
                    <span className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <button className="w-full bg-[#f4f7f9] hover:bg-[#316e91] text-[#316e91] hover:text-white font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
                    <ShoppingCart size={16} />
                    <span className="hidden sm:inline">Thêm vào giỏ</span>
                    <span className="sm:hidden">Thêm</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
