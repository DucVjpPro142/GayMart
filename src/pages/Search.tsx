import { Search as SearchIcon, X, Clock, TrendingUp, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const recentSearches = ['Cà phê muối', 'Bánh mì thịt nướng', 'Nước suối', 'Mì xào hải sản'];
const popularCategories = ['Đồ uống', 'Snack', 'Đồ ăn nhanh', 'Tráng miệng', 'Trái cây'];

const searchResults = [
  { id: 1, name: 'Cà phê sữa đá pha sẵn', price: 22000, oldPrice: 25000, img: 'https://images.unsplash.com/photo-1461023058943-07cb1ce89b02?w=500&q=80', rating: 5, reviews: 124 },
  { id: 2, name: 'Bánh mì thịt nướng', price: 30000, oldPrice: null, img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&q=80', rating: 4.8, reviews: 312 },
  { id: 3, name: 'Trà đào cam sả', price: 28000, oldPrice: 35000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80', rating: 4.8, reviews: 210 },
  { id: 4, name: 'Nước suối Aquafina', price: 10000, oldPrice: null, img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=500&q=80', rating: 5, reviews: 50 },
];

export default function Search() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsSearching(false);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-[#316e91] to-[#5086a3] py-10 px-4 md:px-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6 text-center">
            Tìm kiếm sản phẩm
          </h1>
          
          <form onSubmit={handleSearch} className="relative">
            <div className="glass-panel bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center p-2 shadow-lg transition-all focus-within:bg-white/30 focus-within:ring-2 focus-within:ring-white/50">
              <div className="pl-4 text-white/80">
                <SearchIcon size={24} />
              </div>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Bạn đang tìm gì hôm nay?" 
                className="w-full bg-transparent text-white placeholder-white/70 px-4 py-3 outline-none text-lg font-body"
              />
              {query && (
                <button type="button" onClick={clearSearch} className="pr-4 text-white/80 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {!isSearching ? (
          <div className="space-y-10">
            {/* Recent Searches */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-[#316e91]" />
                <h2 className="font-bold text-xl text-[#1a3a4d]">Tìm kiếm gần đây</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {recentSearches.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => { setQuery(item); setIsSearching(true); }}
                    className="glass-card bg-white/60 hover:bg-white border border-gray-200/50 px-4 py-2 rounded-full text-sm font-body text-[#1a3a4d] transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            {/* Popular Categories */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} className="text-[#316e91]" />
                <h2 className="font-bold text-xl text-[#1a3a4d]">Danh mục phổ biến</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {popularCategories.map((category, idx) => (
                  <Link 
                    to="/category"
                    key={idx}
                    className="glass-card bg-[#316e91]/10 hover:bg-[#316e91]/20 border border-[#316e91]/20 px-5 py-3 rounded-xl font-bold text-[#316e91] transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="font-bold text-xl text-[#1a3a4d]">
              Kết quả cho <span className="text-[#316e91]">"{query}"</span>
            </h2>
            
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {searchResults.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="glass-card rounded-2xl p-3 md:p-4 group flex flex-col h-full cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    {product.oldPrice && product.oldPrice > product.price && (
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
                      {product.oldPrice && product.oldPrice > product.price && (
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
          </div>
        )}
      </div>
    </div>
  );
}
