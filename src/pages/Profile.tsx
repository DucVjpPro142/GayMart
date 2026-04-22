import { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit2, Package, ChevronRight, CheckCircle2, Clock, Map, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockOrders = [
  { id: 'GM-84920', date: '22/04/2026', total: 90000, status: 'Đang giao hàng', items: 3, isActive: true },
  { id: 'GM-84915', date: '20/04/2026', total: 155000, status: 'Đã giao', items: 5, isActive: false },
  { id: 'GM-84890', date: '15/04/2026', total: 45000, status: 'Đã giao', items: 1, isActive: false },
];

export default function Profile() {
  const [user] = useState(() => {
    const stored = localStorage.getItem('gaymart_user');
    return stored ? JSON.parse(stored) : { name: 'Người dùng', email: 'user@example.com' };
  });

  return (
    <div className="pt-24 pb-16 min-h-[80vh] bg-[#f7fafc]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#1a3a4d] tracking-tight">Hồ sơ cá nhân</h1>
          <p className="text-gray-500 font-body mt-1">Quản lý thông tin và theo dõi đơn hàng của bạn</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cột trái: Thông tin User */}
          <div className="w-full lg:w-1/3">
            <div className="glass-panel p-6 rounded-3xl sticky top-28 shadow-lg border border-white/60 bg-white/40">
              <div className="flex flex-col items-center text-center border-b border-gray-200/50 pb-6 mb-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#316e91] to-[#5086a3] flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-white">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#316e91] shadow-md border border-gray-100 hover:bg-[#f7fafc] transition-colors">
                    <Edit2 size={14} />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-[#1a3a4d]">{user.name}</h2>
                <p className="text-gray-500 text-sm font-body bg-[#eef1f3] px-3 py-1 rounded-full mt-2">Thành viên Bạc</p>
              </div>

              <div className="space-y-4 font-body text-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={18} className="text-[#316e91]" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-[#316e91]" />
                  <span>0987 654 321</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin size={18} className="text-[#316e91] mt-0.5 shrink-0" />
                  <span>123 Đường XYZ, Phường 1, Quận 1, TP.HCM</span>
                </div>
              </div>

              <button className="w-full mt-8 glass-card bg-white hover:bg-[#eef1f3] text-[#316e91] font-bold py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
                <Edit2 size={16} /> Chỉnh sửa thông tin
              </button>
            </div>
          </div>

          {/* Cột phải: Đơn hàng & Lịch sử */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-4 rounded-2xl bg-white/60 text-center border border-white shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#eef1f3] flex items-center justify-center text-[#316e91] mb-2">
                  <Package size={20} />
                </div>
                <div className="font-extrabold text-[#1a3a4d] text-xl">12</div>
                <div className="text-xs text-gray-500 font-body mt-1">Tổng đơn hàng</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl bg-[#316e91]/10 text-center border border-[#316e91]/20 shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-white flex items-center justify-center text-[#316e91] mb-2 shadow-sm">
                  <Clock size={20} />
                </div>
                <div className="font-extrabold text-[#316e91] text-xl">1</div>
                <div className="text-xs text-[#316e91]/80 font-body mt-1">Đang chờ giao</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl bg-white/60 text-center border border-white shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#eef1f3] flex items-center justify-center text-green-600 mb-2">
                  <CheckCircle2 size={20} />
                </div>
                <div className="font-extrabold text-[#1a3a4d] text-xl">11</div>
                <div className="text-xs text-gray-500 font-body mt-1">Đã hoàn thành</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl bg-white/60 text-center border border-white shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#eef1f3] flex items-center justify-center text-[#316e91] mb-2">
                  <Map size={20} />
                </div>
                <div className="font-extrabold text-[#1a3a4d] text-xl">2</div>
                <div className="text-xs text-gray-500 font-body mt-1">Địa chỉ đã lưu</div>
              </div>
            </div>

            {/* Order History */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl bg-white/40 shadow-lg border border-white/60">
              <h3 className="font-bold text-[#1a3a4d] text-xl mb-6">Đơn hàng của tôi</h3>
              
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="glass-card bg-white p-4 md:p-5 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${order.isActive ? 'bg-[#316e91] text-white animate-pulse shadow-md' : 'bg-[#eef1f3] text-gray-500'}`}>
                        {order.isActive ? <Truck size={24} /> : <Package size={24} />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-[#1a3a4d]">{order.id}</span>
                          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${order.isActive ? 'bg-[#eef1f3] text-[#316e91]' : 'bg-gray-100 text-gray-500'}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 font-body">{order.date} • {order.items} sản phẩm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-gray-100 pt-3 md:pt-0">
                      <div className="text-left md:text-right">
                        <span className="block text-xs text-gray-400 font-body mb-0.5">Tổng tiền</span>
                        <span className="font-extrabold text-red-500">{order.total.toLocaleString('vi-VN')}đ</span>
                      </div>
                      
                      {order.isActive ? (
                        <Link 
                          to="/tracking" 
                          className="bg-[#316e91] hover:bg-[#1a3a4d] text-white text-sm font-bold py-2 px-4 rounded-xl transition-all shadow-sm flex items-center gap-1"
                        >
                          Theo dõi <ChevronRight size={16} />
                        </Link>
                      ) : (
                        <button className="glass-card bg-[#f7fafc] hover:bg-[#eef1f3] text-[#1a3a4d] text-sm font-bold py-2 px-4 rounded-xl transition-all flex items-center gap-1 border border-gray-200">
                          Chi tiết
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 text-[#316e91] font-bold text-sm hover:underline flex items-center justify-center gap-1">
                Xem tất cả lịch sử <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
