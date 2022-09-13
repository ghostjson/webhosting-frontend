const authRequest = () => {};

const authHeader = {
  Authorization: "Basic " + localStorage.getItem("credentials"),
};
(async () => {
  const response = await fetch("http://localhost:5000/api/v1/user", {
    headers: authHeader,
  });

  if (response.status !== 200) {
    location.href = "/login.html";
  }
})();

const getAuthHeader = () => {
  return authHeader;
};
