export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});

export const deleteArticle = article => ({
  type: "DELETE_ARTICLE"
});
