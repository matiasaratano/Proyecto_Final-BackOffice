import { jwtDecode } from 'jwt-decode';

const ValidationTokenService = (navigate) => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.role.toLowerCase() !== "administrador") {
      navigate("/login");
    }
  } else {
    navigate("/login");
  }
};

export default ValidationTokenService;