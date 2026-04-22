import { CheckCircle2, Package, Truck, Home, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const orderSteps = [
  { id: 1, title: 'Đơn hàng đã đặt', time: '10:30 - Hôm nay', description: 'Đơn hàng đã được xác nhận.', isCompleted: true, icon: CheckCircle2 },
  { id: 2, title: 'Đang chuẩn bị', time: '10:45 - Hôm nay', description: 'Cửa hàng đang đóng gói sản phẩm.', isCompleted: true, icon: Package },
  { id: 3, title: 'Đang giao hàng', time: '11:00 - Hôm nay', description: 'Tài xế đang trên đường giao hàng đến bạn.', isCompleted: false, icon: Truck, isActive: true },
  { id: 4, title: 'Giao hàng thành công', time: 'Dự kiến 11:20', description: '', isCompleted: false, icon: Home },
];

export default function OrderTracking() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#316e91] to-[#5086a3] py-8 px-4 md:px-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">Theo dõi đơn hàng</h1>
              <p className="text-white/80 font-medium">Mã đơn: <span className="font-bold text-white">#GM-84920</span></p>
            </div>
            <div className="glass-panel px-4 py-2 inline-flex flex-col items-end rounded-xl border-white/20">
              <span className="text-xs text-white/80 uppercase font-bold tracking-wider">Trạng thái</span>
              <span className="text-lg font-extrabold text-white">Đang giao hàng</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cột trái: Tiến trình giao hàng & Thông tin tài xế */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* Map Placeholder (Glassmorphism card) */}
            <div className="glass-card rounded-3xl p-2 h-64 md:h-80 relative overflow-hidden bg-[#eef1f3]">
              <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
              {/* Fake route line */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 20 80 Q 50 60 40 40 T 80 20" fill="none" stroke="#316e91" strokeWidth="3" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
                <circle cx="20" cy="80" r="4" fill="#1a3a4d" />
                <circle cx="80" cy="20" r="4" fill="#ba1a1a" />
              </svg>
              {/* Pins */}
              <div className="absolute bottom-1/4 left-1/4 flex flex-col items-center animate-bounce">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#316e91] relative z-10">
                  <Truck size={20} className="text-[#316e91]" />
                </div>
              </div>
              <div className="absolute top-1/4 right-1/4 flex flex-col items-center">
                <div className="text-red-500 relative z-10">
                  <MapPin size={40} fill="currentColor" className="text-white" />
                </div>
              </div>
            </div>

            {/* Thông tin tài xế */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 border-white/60 shadow-lg relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#94cdf5]/20 rounded-full blur-[40px]"></div>
              
              <div className="flex items-center gap-4 relative z-10 w-full sm:w-auto">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80" alt="Driver" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a4d] text-lg">Trần Văn Shipper</h3>
                  <p className="text-sm text-gray-500 font-body">Honda Wave - <span className="font-bold text-[#316e91]">59X1-123.45</span></p>
                  <div className="flex items-center gap-1 mt-1 text-yellow-500 text-xs font-bold">
                    ★ 4.9 <span className="text-gray-400 font-normal">(1.2k chuyến)</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 w-full sm:w-auto relative z-10">
                <button className="flex-1 sm:flex-none glass-card bg-white hover:bg-[#eef1f3] text-[#316e91] border border-[#316e91]/20 p-3 rounded-xl flex items-center justify-center transition-colors shadow-sm">
                  <MessageCircle size={20} />
                </button>
                <button className="flex-1 sm:flex-none bg-[#316e91] hover:bg-[#1a3a4d] text-white p-3 rounded-xl flex items-center justify-center transition-colors shadow-md gap-2 font-bold px-6">
                  <Phone size={20} /> <span className="sm:hidden">Gọi</span>
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass-card p-6 md:p-8 rounded-3xl bg-white/40">
              <h3 className="font-bold text-[#1a3a4d] text-xl mb-8">Trạng thái đơn hàng</h3>
              <div className="relative border-l-2 border-gray-200/50 ml-4 md:ml-6 space-y-8">
                {orderSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="relative pl-8 md:pl-10">
                      {/* Timeline Node */}
                      <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-all duration-300
                        ${step.isCompleted ? 'bg-[#316e91] text-white' : step.isActive ? 'bg-[#94cdf5] text-[#1a3a4d] animate-pulse' : 'bg-gray-200 text-gray-400'}`}>
                        <Icon size={14} />
                      </div>
                      
                      {/* Content */}
                      <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 ${!step.isCompleted && !step.isActive ? 'opacity-50' : ''}`}>
                        <div>
                          <h4 className={`font-bold ${step.isActive ? 'text-[#316e91] text-lg' : 'text-[#1a3a4d]'}`}>{step.title}</h4>
                          {step.description && <p className="text-sm text-gray-600 font-body mt-1">{step.description}</p>}
                        </div>
                        <span className="text-xs font-bold text-gray-400 whitespace-nowrap">{step.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Cột phải: Thông tin đơn hàng & Hỗ trợ */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Tóm tắt đơn hàng */}
            <div className="glass-panel p-6 rounded-3xl sticky top-28 shadow-lg border-white/60">
              <h3 className="font-bold text-[#1a3a4d] text-lg mb-4 border-b border-gray-200/50 pb-3">Chi tiết đơn hàng</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100&q=80" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a3a4d] line-clamp-1">Nước ép cam tươi</h4>
                    <p className="text-xs text-gray-500">SL: 2</p>
                  </div>
                  <span className="text-sm font-bold text-[#1a3a4d]">60.000đ</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=100&q=80" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1a3a4d] line-clamp-1">Sữa chua dâu tây</h4>
                    <p className="text-xs text-gray-500">SL: 1</p>
                  </div>
                  <span className="text-sm font-bold text-[#1a3a4d]">15.000đ</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-gray-200/50 pt-4 mb-4 text-sm font-body text-gray-600">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span className="font-bold text-[#1a3a4d]">75.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí giao hàng</span>
                  <span className="font-bold text-[#1a3a4d]">15.000đ</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200/50 pt-4 mb-6">
                <span className="font-bold text-[#1a3a4d]">Tổng cộng</span>
                <span className="text-2xl font-extrabold text-red-500">90.000đ</span>
              </div>

              <div className="bg-[#eef1f3] rounded-xl p-4 text-xs font-body text-gray-600">
                <span className="font-bold text-[#1a3a4d] block mb-1">Giao đến:</span>
                123 Đường XYZ, Phường 1, Quận 1, TP.HCM
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
