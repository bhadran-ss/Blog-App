export const Footer=()=>{
    return(
      
        <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white">MyBlog</h2>
              <p className="mt-2 text-sm text-gray-400">
                Sharing insights, stories, and inspiration with the world.
              </p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">Contact</a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <a href="#" className="hover:text-white transition">
                  FaFacebook
                </a>
                <a href="#" className="hover:text-white transition">
                  FaTwitter 
                </a>
                <a href="#" className="hover:text-white transition">
                  FaInstagram 
                </a>
                <a href="#" className="hover:text-white transition">
                  FaLinkedin
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} MyBlog. All rights reserved.
          </div>
        </div>
      </footer>
    );
}