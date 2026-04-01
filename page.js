import React from 'react';
import { ShoppingCart, Phone, MapPin, Clock } from 'lucide-react';

const PizzaLandingPage = () => {
  const menuItems = [
    { id: 1, name: "Deluxe Veggie", price: "249", desc: "Onion, Capsicum, Mushroom, Corn", tag: "Best Seller" },
    { id: 2, name: "Tandoori Paneer", price: "299", desc: "Paneer, Red Paprika, Capsicum", tag: "Hot" },
    { id: 3, name: "Makhani Burger", price: "99", desc: "Creamy Makhani Sauce, Veg Patty", tag: "New" },
  ];

  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-black text-orange-600">POOJA D PIZZA</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
          <Phone size={18} /> Order Now
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-16 px-6 text-center bg-gradient-to-b from-orange-100 to-orange-50">
        <span className="bg-orange-200 text-orange-700 px-4 py-1 rounded-full text-sm font-bold">MEERUT'S FAVORITE</span>
        <h2 className="text-5xl font-extrabold text-gray-800 mt-4 leading-tight">
          Har Slice Mein <br /> <span className="text-orange-600">Asli Maza!</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">Fresh Dough. Premium Cheese. Fast Delivery.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg">Check Menu</button>
          <button className="bg-white border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-xl font-bold">Book Table</button>
        </div>
      </header>

      {/* Digital Menu */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 border-l-8 border-orange-600 pl-4">Our Digital Menu</h3>
        <div className="grid gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100 flex justify-between items-center hover:shadow-md transition">
              <div>
                {item.tag && <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold uppercase">{item.tag}</span>}
                <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                <p className="text-orange-600 font-black mt-2 text-lg">₹{item.price}</p>
              </div>
              <button className="bg-orange-600 text-white p-3 rounded-xl shadow-lg">
                <ShoppingCart size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Info Section */}
      <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="flex items-center gap-2 text-orange-400">
            <MapPin size={20} /> <span>Opp. Subharti University, Meerut</span>
          </div>
          <div className="flex items-center gap-2 text-orange-400">
            <Clock size={20} /> <span>Open: 11 AM - 11 PM</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PizzaLandingPage;
