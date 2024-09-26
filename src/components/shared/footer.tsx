export default function Footer() {
  return (
    <footer className="h-[20dvh] bg-gray-800 py-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-4" />
            <span className="block">Address: 1234 Street Name, City Name</span>
            <span className="block">Phone: +123 456 7890</span>
            <span className="block">Email: </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
