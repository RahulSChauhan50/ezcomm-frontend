export const saveToken = (token) => {
  localStorage.setItem("Token", token);
};

export const getToken = () => {
  return localStorage.getItem("Token");
};
