export const bridgeData = (state) => {
  const data = localStorage.getItem("data");
  const dataJson = JSON.parse(data);
  console.log(dataJson);
  switch (state) {
    case "ALLUSER":
      setAllUser(dataJson);
      localStorage.removeItem("data");
      break;
    default:
      break;
  }
};

export const login = (data) => {
  localStorage.setItem("user", data);
  const parseUser = JSON.parse(data);
  setUser(parseUser);
};

export const logout = () => {
  localStorage.removeItem("user");
  setUser(null);
};
