import { useEffect, useState } from "react";

const useMenus = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.102:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return [menu];
};
export default useMenus;
