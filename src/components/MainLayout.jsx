// import Header from "./Header";
import SideBar from "./SideBar";
import AppLayout from "./AppLayout";

export default function MainLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="max-h-screen flex-1 overflow-y-auto">
        <AppLayout />
      </main>
    </div>
  );
}
