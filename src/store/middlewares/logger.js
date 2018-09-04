/**
 * This middleware is used to automatically perform a console.log on actions.
 * Actions must carry the timestamp.
 */
const logger = store => next => (action) => {
  const timestamp = Date.now();
  action.timestamp = timestamp;
  console.log(timestamp);
  next(action);
};

export default logger;
