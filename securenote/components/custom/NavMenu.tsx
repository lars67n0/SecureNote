import React from "react";
import NavLink from "./NavLink";
import { Home, FileText, Settings } from "lucide-react"; // Icons

const NavMenu = () => {
  return (
    <div className="flex gap-8 text-lg font-semibold">
      <NavLink href="/" icon={<Home size={20} />} label="Home" />
      <NavLink href="/notes" icon={<FileText size={20} />} label="Notes" />
      <NavLink href="/settings" icon={<Settings size={20} />} label="Settings" />
    </div>
  );
};

export default NavMenu;