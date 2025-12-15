import { Link } from "react-router-dom";
// Converted to Tailwind CSS

function Card({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/${item.id}`} className="block">
        <img src={item.img} alt="" className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <Link to={`/${item.id}`} className="hover:text-primary">{item.title}</Link>
        </h2>
        <p className="flex items-center text-gray-medium mb-2">
          <img src="/pin.png" alt="" className="w-4 h-4 mr-2" />
          <span>{item.address}</span>
        </p>
        <p className="text-2xl font-bold text-primary mb-4">$ {item.price}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex items-center">
              <img src="/bed.png" alt="" className="w-4 h-4 mr-1" />
              <span className="text-sm text-gray-medium">{item.bedroom} bedroom</span>
            </div>
            <div className="flex items-center">
              <img src="/bath.png" alt="" className="w-4 h-4 mr-1" />
              <span className="text-sm text-gray-medium">{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
              <img src="/save.png" alt="" className="w-4 h-4" />
            </div>
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
              <img src="/chat.png" alt="" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;