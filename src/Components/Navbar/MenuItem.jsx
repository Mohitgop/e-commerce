import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const MenuItem = ({ to, label, icon }) => {
  const { logout } = useContext(UserContext);
  return (
    <li>
      <div
        onClick={() => logout()}
        className="flex items-center gap-3 px-3 rounded-lg py-3 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
      >
        {icon}
        {label}
      </div>
    </li>
  );
};

export default MenuItem;
