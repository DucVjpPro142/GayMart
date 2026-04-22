import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  Activity,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', icon: DollarSign, trend: '+20.1% from last month', trendUp: true },
    { title: 'Active Users', value: '2,350', icon: Users, trend: '+180.1% from last month', trendUp: true },
    { title: 'Sales', value: '+12,234', icon: ShoppingCart, trend: '+19% from last month', trendUp: true },
    { title: 'Active Now', value: '573', icon: Activity, trend: '+201 since last hour', trendUp: true },
  ];

  const recentOrders = [
    { id: '#3210', customer: 'Nguyễn Văn A', product: 'Thịt bò Úc 500g', amount: '150.000đ', status: 'Completed' },
    { id: '#3209', customer: 'Trần Thị B', product: 'Combo Rau Củ Hữu Cơ', amount: '85.000đ', status: 'Processing' },
    { id: '#3208', customer: 'Lê Văn C', product: 'Thùng Bia Heineken', amount: '450.000đ', status: 'Completed' },
    { id: '#3207', customer: 'Phạm Thị D', product: 'Sữa tươi Vinamilk 1L', amount: '35.000đ', status: 'Pending' },
    { id: '#3206', customer: 'Hoàng Văn E', product: 'Snack khoai tây Lay\'s', amount: '22.000đ', status: 'Processing' },
  ];

  const mockProducts = [
    { id: 1, name: 'Cá hồi Na Uy phi lê 500g', category: 'Thực phẩm tươi sống', price: '250.000đ', stock: 15, status: 'Active' },
    { id: 2, name: 'Sữa chua nha đam Vinamilk lốc 4', category: 'Sữa & Từ sữa', price: '28.000đ', stock: 45, status: 'Active' },
    { id: 3, name: 'Nước mắm Nam Ngư 750ml', category: 'Gia vị', price: '45.000đ', stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Giấy vệ sinh Watersilk 10 cuộn', category: 'Hàng tiêu dùng', price: '65.000đ', stock: 132, status: 'Active' },
    { id: 5, name: 'Bánh gạo One One vị phô mai', category: 'Đồ ăn vặt', price: '32.000đ', stock: 85, status: 'Active' },
  ];

  const renderDashboard = () => (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            Export Data
          </button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors shadow-sm shadow-pink-200">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              </div>
              <div className="p-3 bg-pink-50 rounded-xl">
                <stat.icon className="w-5 h-5 text-pink-600" />
              </div>
            </div>
            <div className="flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium mr-2">{stat.trend.split(' ')[0]}</span>
              <span className="text-gray-400">{stat.trend.split(' ').slice(1).join(' ')}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Chart Area (Placeholder) */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Revenue Overview</h2>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block p-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 flex items-end space-x-2 w-full">
            {/* Simulated bar chart */}
            {[40, 60, 45, 80, 50, 90, 65, 85, 70, 95, 60, 75].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end h-full group">
                <div 
                  className="bg-pink-100 group-hover:bg-pink-500 rounded-t-md transition-all duration-300 w-full" 
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
            <a href="#" className="text-sm font-medium text-pink-600 hover:text-pink-700">View all</a>
          </div>
          <div className="space-y-5">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-800">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">{order.amount}</p>
                  <span className={`inline-block px-2 py-1 text-[10px] font-medium rounded-full ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderProducts = () => (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
        <button className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors shadow-sm shadow-pink-200">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-64 bg-white"
            />
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg text-sm p-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option>All Categories</option>
              <option>Thực phẩm tươi sống</option>
              <option>Gia vị</option>
              <option>Hàng tiêu dùng</option>
              <option>Đồ ăn vặt</option>
              <option>Sữa & Từ sữa</option>
            </select>
            <select className="border border-gray-300 rounded-lg text-sm p-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option>Status</option>
              <option>Active</option>
              <option>Out of Stock</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm">
                <th className="p-4 font-medium">Product Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">{product.name}</td>
                  <td className="p-4 text-gray-500">{product.category}</td>
                  <td className="p-4 text-gray-800">{product.price}</td>
                  <td className="p-4 text-gray-500">{product.stock}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      product.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-1">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to 5 of 24 entries</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 bg-pink-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
        } fixed inset-y-0 left-0 z-50 transition-all duration-300 ease-in-out bg-white border-r border-gray-200 md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link to="/" className="text-2xl font-bold text-pink-600">GayMart Admin</Link>
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === 'dashboard' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === 'products' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
          >
            <Package className="w-5 h-5 mr-3" />
            <span>Products</span>
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === 'orders' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
          >
            <ShoppingCart className="w-5 h-5 mr-3" />
            <span>Orders</span>
          </button>
          <button 
            onClick={() => setActiveTab('customers')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === 'customers' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
          >
            <Users className="w-5 h-5 mr-3" />
            <span>Customers</span>
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === 'settings' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-600 hover:bg-gray-50 font-medium'}`}
          >
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <button 
              className="text-gray-500 hover:text-gray-700 mr-4 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-64"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Admin avatar" 
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <div className="hidden md:block text-sm">
                <p className="font-semibold text-gray-700">Admin User</p>
                <p className="text-gray-500 text-xs">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'products' && renderProducts()}
          {activeTab === 'orders' && (
             <div className="flex justify-center items-center h-full text-gray-500">Orders management coming soon...</div>
          )}
          {activeTab === 'customers' && (
             <div className="flex justify-center items-center h-full text-gray-500">Customers management coming soon...</div>
          )}
          {activeTab === 'settings' && (
             <div className="flex justify-center items-center h-full text-gray-500">Settings coming soon...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;

