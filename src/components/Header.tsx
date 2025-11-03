import AddProjectDialog from "./dialog/AddProjectDialog";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 text-white bg-secondary">
      <div>
        <img src="/src/assets/login.png" alt="logo" className="w-28" />
      </div>
      <div className="flex space-x-5">
        <AddProjectDialog />
      </div>
    </div>
  );
}
