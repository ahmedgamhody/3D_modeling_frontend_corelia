/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

export default function ModelCard({ model }: any) {
  return (
    <Link to={`models/${model.id}`} target="_blank">
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gray-200">
          <img
            src={model.image}
            alt={model.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {model.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {model.description}
          </p>
        </div>

        {/* View Details Badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
        </div>
      </div>
    </Link>
  );
}
