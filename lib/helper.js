const BASE_URL = "http://localhost:3000";

//all users
export const getUsersApi = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const data = await response.json();
  return data;
};

//Single user
export const getUserApi = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const data = await response.json();
  if (data) return data;
  return "this user is not found";
};

//postinga new user
export const postUserApi = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

//Update a new user
export const putUserApi = async (userId, formData) => {
  try {
    const Options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

//Delete a user
export const deleteUserApi = async (userId) => {
  try {
    const Options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
