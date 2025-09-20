const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold">YourCompany</h2>
          <p className="mt-2 text-sm">Empowering Digital Growth Partners Globally.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/blogs" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/services/seo" className="hover:underline">SEO</a></li>
            <li><a href="/services/ppc" className="hover:underline">Paid Advertising</a></li>
            <li><a href="/services/content" className="hover:underline">Content Marketing</a></li>
            <li><a href="/services/branding" className="hover:underline">Branding</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Connect with us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-gray-300">🌐</a>
            <a href="#" className="hover:text-gray-300">🐦</a>
            <a href="#" className="hover:text-gray-300">📘</a>
            <a href="#" className="hover:text-gray-300">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm text-white/80">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <p className="mt-1">SEO Friendly | Global Reach | Digital Growth</p>
      </div>
    </footer>
  );
};

export default Footer;
