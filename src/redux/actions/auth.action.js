export const saveUser = (user) => {
  return {
    type: "saveuser",
    payload: user,
  };
};
