import Button from "./Button";
import BlackButton from "./BlackButton";

function Header() {
  return (
    <header className="flex justify-between items-center mx-[200px] h-[80px]">
      <h1 className="text-xl font-bold">Kerja-IT</h1>
      <div className="space-x-2">
        <Button text="Talents" />
        <Button text="Post jobs" />
        <BlackButton text="FatinYazim" />
      </div>
    </header>
  );
}

export default Header;