// use local storage to manage data
const addToLocalStorage = (id) => {
  localStorage.setItem("break-time", JSON.stringify(id));
};

const getDataFromLocalStorage = () => localStorage.getItem("break-time");

export { addToLocalStorage, getDataFromLocalStorage };
