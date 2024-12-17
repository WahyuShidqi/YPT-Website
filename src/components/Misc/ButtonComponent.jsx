import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({ to, children }) {
  return (
    <button className="text-white rounded-md px-8 mt-10 py-4 text-left w-fit h-fit font-bold bg-slate-800 hover:bg-slate-950 animate-fade-up">
      <Link to={to}>{children}</Link>
    </button>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired, // 'to' must be a string and is required
  children: PropTypes.node.isRequired, // 'children' can be any renderable content and is required
};
