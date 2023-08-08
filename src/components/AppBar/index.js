import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export function AppBar({ pages }) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();
    const { user, logout } = useAuth();
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = (path) => {
      setAnchorElNav(null);
      if (path) {
        navigate(path);
      }
    };

    return (
        <div>
            {pages?.map((page) => (
                <button
                  key={page.label}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <p >{page.label}</p>
                </button>
              ))}
              {!!user && (
                <button key={"logout"} onClick={logout}>
                  <p >Logout</p>
                </button>
              )}
        </div>
    )
}