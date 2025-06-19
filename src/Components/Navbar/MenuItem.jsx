import { NavLink } from "react-router-dom";

const MenuItem = ({ to, label, icon }) => (
  <li>
    <NavLink
      to={to}
      className="flex items-center gap-3 px-3 rounded-lg py-3 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
    >
      {icon}
      {label}
    </NavLink>
  </li>
);

export default MenuItem;