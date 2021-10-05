export const asynchronousAPIMiddleware = (store) => (next) => (action) => {
  const request = () => ({ type: `${action.type}_REQUEST` });
  const success = (data) => ({ type: `${action.type}_SUCCESS`, data });
  const failure = (error) => ({ type: `${action.type}_FAILURE`, error });
  const progress = (value) => ({
    type: `${action.type}_PROGRESS`,
    progress: value,
  });

  if (action.hasOwnProperty("async") && action.async) {
    store.dispatch(request());
    // Construct URL
    let url = action.url;

    // Fetch
    fetch(url)
      .then(async (response) => {
        if (response.ok) {
          // Check response status code
          if (response.status == 200) {
            // Get immediate response data
            const data = await response.json();
            store.dispatch(success(data));
          }
        } else {
          const error = await response.json();
          store.dispatch(failure(error.message));
        }
      })
      .catch((error) => console.log(error));
  }

  return next(action);
};
