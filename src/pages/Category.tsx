import { ShoppingCart, Filter, ChevronDown, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Cà phê sữa đá pha sẵn', price: 22000, oldPrice: 25000, img: 'https://images.unsplash.com/photo-1461023058943-07cb1ce89b02?w=500&q=80', rating: 5, reviews: 124 },
  { id: 2, name: 'Nước ép cam tươi thanh mát', price: 30000, oldPrice: 40000, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80', rating: 4.5, reviews: 89 },
  { id: 3, name: 'Trà đào cam sả', price: 28000, oldPrice: 35000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80', rating: 4.8, reviews: 210 },
  { id: 4, name: 'Nước khoáng có ga Perrier', price: 45000, oldPrice: 50000, img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=500&q=80', rating: 5, reviews: 56 },
  { id: 5, name: 'Sữa chua uống vị dâu', price: 18000, oldPrice: 22000, img: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=500&q=80', rating: 4.2, reviews: 34 },
  { id: 6, name: 'Sinh tố bơ xay', price: 35000, oldPrice: 40000, img: 'https://images.unsplash.com/photo-1623065422900-018226685984?w=500&q=80', rating: 4.9, reviews: 150 },
  { id: 7, name: 'Nước yến sào cao cấp', price: 65000, oldPrice: 80000, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80', rating: 5, reviews: 42 },
  { id: 8, name: 'Trà xanh không độ', price: 10000, oldPrice: 12000, img: 'https://images.unsplash.com/photo-1588665046200-a3597cc54972?w=500&q=80', rating: 4, reviews: 500 },
  { id: 9, name: 'Sữa đậu nành nguyên chất', price: 15000, oldPrice: 18000, img: 'https://images.unsplash.com/photo-1596495393043-4e3bbda05a8f?w=500&q=80', rating: 4.6, reviews: 75 },
];

export default function Category() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#316e91] to-[#5086a3] py-12 px-4 md:px-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <nav className="text-white/80 text-sm mb-4 flex items-center gap-2 font-body">
            <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Danh mục</span>
            <span>/</span>
            <span className="text-white font-bold">Đồ uống & Giải khát</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Đồ uống & Giải khát</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="glass-panel p-6 rounded-2xl sticky top-28">
              <div className="flex items-center gap-2 mb-6 border-b border-gray-200/50 pb-4">
                <Filter size={20} className="text-[#316e91]" />
                <h3 className="font-bold text-lg text-[#1a3a4d]">Bộ lọc</h3>
              </div>

              {/* Danh mục con */}
              <div className="mb-6">
                <h4 className="font-bold text-[#1a3a4d] mb-3">Danh mục con</h4>
                <ul className="space-y-2 text-sm font-body text-gray-600">
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="checkbox" className="rounded text-[#316e91] focus:ring-[#316e91]" /> Nước có ga
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="checkbox" className="rounded text-[#316e91] focus:ring-[#316e91]" defaultChecked /> Nước ép
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="checkbox" className="rounded text-[#316e91] focus:ring-[#316e91]" /> Cà phê
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="checkbox" className="rounded text-[#316e91] focus:ring-[#316e91]" /> Trà
                    </label>
                  </li>
                </ul>
              </div>

              {/* Lọc theo giá */}
              <div className="mb-6">
                <h4 className="font-bold text-[#1a3a4d] mb-3">Giá bán</h4>
                <ul className="space-y-2 text-sm font-body text-gray-600">
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="radio" name="price" className="text-[#316e91] focus:ring-[#316e91]" /> Dưới 20.000đ
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="radio" name="price" className="text-[#316e91] focus:ring-[#316e91]" defaultChecked /> 20.000đ - 50.000đ
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="radio" name="price" className="text-[#316e91] focus:ring-[#316e91]" /> Trên 50.000đ
                    </label>
                  </li>
                </ul>
              </div>

              {/* Đánh giá */}
              <div>
                <h4 className="font-bold text-[#1a3a4d] mb-3">Đánh giá</h4>
                <ul className="space-y-2 text-sm font-body text-gray-600">
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="checkbox" className="rounded text-[#316e91] focus:ring-[#316e91]" /> 
                      <span className="flex text-yellow-400"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#316e91]">
                      <input type="checkbox" className="rounded text-[#316e91] focus:ring-[#316e91]" /> 
                      <span className="flex text-yellow-400"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} className="text-gray-300"/></span> 
                      <span className="ml-1 text-xs">trở lên</span>
                    </label>
                  </li>
                </ul>
              </div>

              <button className="w-full mt-6 bg-[#316e91] text-white font-bold py-3 rounded-xl hover:bg-[#1a3a4d] transition-colors shadow-md">
                Áp dụng bộ lọc
              </button>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="w-full lg:w-3/4">
            {/* Toolbar */}
            <div className="glass-panel p-4 rounded-xl mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[#1a3a4d] font-bold text-sm">Tìm thấy <span className="text-[#316e91]">124</span> sản phẩm</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-body text-gray-500">Sắp xếp theo:</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 text-[#1a3a4d] py-2 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#316e91] cursor-pointer shadow-sm">
                    <option>Mới nhất</option>
                    <option>Giá: Thấp đến Cao</option>
                    <option>Giá: Cao đến Thấp</option>
                    <option>Đánh giá cao nhất</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="glass-card rounded-2xl p-3 md:p-4 group flex flex-col h-full cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    {product.oldPrice > product.price && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                        -{Math.round((1 - product.price/product.oldPrice)*100)}%
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={12} className="text-yellow-400" fill="currentColor" />
                    <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-400 font-body">({product.reviews})</span>
                  </div>

                  <h3 className="font-bold text-[#1a3a4d] text-sm line-clamp-2 mb-2 flex-grow group-hover:text-[#316e91] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="font-extrabold text-lg text-red-500">{product.price.toLocaleString('vi-VN')}đ</span>
                      {product.oldPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString('vi-VN')}đ</span>
                      )}
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

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-500 hover:text-[#316e91] hover:bg-white shadow-sm disabled:opacity-50">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#316e91] text-white font-bold shadow-md">1</button>
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#1a3a4d] font-bold hover:text-[#316e91] hover:bg-white shadow-sm">2</button>
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#1a3a4d] font-bold hover:text-[#316e91] hover:bg-white shadow-sm">3</button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#1a3a4d] font-bold hover:text-[#316e91] hover:bg-white shadow-sm">12</button>
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-500 hover:text-[#316e91] hover:bg-white shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
