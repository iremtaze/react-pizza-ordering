import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; 


function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
    children: PropTypes.node.isRequired, // 'children' should be a React node
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 'to' should be a string or number
  };

export default LinkButton;
