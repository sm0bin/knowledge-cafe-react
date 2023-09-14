import avatar from "../assets/avatar.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto py-9 mb-8 border-b">
      <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
      <img src={avatar} alt="avatar" />
    </header>
  );
};

export default Header;
