import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AppBar } from "../AppBar";

export const ProtectedLayout = () => {
  const { user, auth } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }
//   自动生成侧边栏

  return (
    <div>
      <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" }
        ]}
      />
      {outlet}
    </div>
  );
};
