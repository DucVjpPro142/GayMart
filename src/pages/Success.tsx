import { CheckCircle, Home, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="pt-24 pb-16 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#94cdf5]/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#a8defe]/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-2xl relative z-10">
        <div className="glass-panel p-8 md:p-12 rounded-3xl text-center shadow-2xl border-white/60 bg-white/40">
          
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#316e91] rounded-full blur-xl opacity-40 animate-pulse"></div>
              <CheckCircle size={80} className="text-[#316e91] relative z-10" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a3a4d] tracking-tight mb-4">
            Đặt hàng thành công!
          </h1>
          
          <p className="text-gray-600 font-body mb-8 text-lg">
            Cảm ơn bạn đã mua sắm tại GayMart. Đơn hàng <span className="font-bold text-[#316e91]">#GM-84920</span> của bạn đã được xác nhận và đang trong quá trình xử lý.
          </p>

          <div className="glass-card bg-white/60 p-6 rounded-2xl text-left mb-8 border border-white/50">
            <h3 className="font-bold text-[#1a3a4d] mb-4 border-b border-gray-200/50 pb-2">Thông tin giao hàng</h3>
            <div className="space-y-3 text-sm font-body text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-500">Người nhận:</span>
                <span className="font-semibold">Nguyễn Văn A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Điện thoại:</span>
                <span className="font-semibold">0987 654 321</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Địa chỉ:</span>
                <span className="font-semibold text-right max-w-[200px]">123 Đường XYZ, Phường 1, Quận 1, TP.HCM</span>
              </div>
              <div className="flex justify-between border-t border-gray-200/50 pt-2 mt-2">
                <span className="text-gray-500">Phương thức thanh toán:</span>
                <span className="font-semibold">Tiền mặt khi nhận hàng (COD)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tổng tiền:</span>
                <span className="font-extrabold text-red-500 text-base">75.000đ</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-[#316e91] hover:bg-[#1a3a4d] text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_8px_20px_rgba(49,110,145,0.3)] flex items-center justify-center gap-2"
            >
              <Home size={18} /> Về trang chủ
            </Link>
            <Link 
              to="/tracking" 
              className="glass-card bg-white/50 hover:bg-white text-[#1a3a4d] font-bold py-3 px-8 rounded-full transition-all shadow-sm border border-gray-200/50 flex items-center justify-center gap-2"
            >
              <FileText size={18} /> Theo dõi đơn hàng <ChevronRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
