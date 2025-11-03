import ModelCard from "@/components/ModelCard";
import useTitle from "../hooks/useChangePageTitle";

export default function HomePage() {
  useTitle("HomePage");
  const DummyModels = [
    {
      id: 1,
      name: "Model 1",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/2/AM/DI/KN/19099136/3d-wallpapers-3d-3713-500x500.jpg",
      description: "This is a description for Model 1.",
    },
    {
      id: 2,
      name: "Model 2",
      image:
        "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "This is a description for Model 2.",
    },
    {
      id: 3,
      name: "Model 3",
      image:
        "https://img.pikbest.com/ai/illus_our/20230427/eb57b396253843486a55b0fa1720ddbb.jpg!w700wp",
      description: "This is a description for Model 3.",
    },
    {
      id: 4,
      name: "Model 4",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-3d-wallpaper-with-blue-blocks-and-triangles-image_2603317.jpg",
      description: "This is a description for Model 4.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            3D Models Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of stunning 3D models
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {DummyModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
}
