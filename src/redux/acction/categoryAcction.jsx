export const insertCategory = (category, navigate) => async (dispatch) => {
  // const service = new CategoryService();
  try {
    console.log("insert catrgory");
  } catch (error) {
    console.log("Error: ", error);
  }
  navigate("/categories");
};
