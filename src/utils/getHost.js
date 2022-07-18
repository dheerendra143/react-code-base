const getHost = () => {
  let baseURL;
  console.log("process.env.REACT_APP_IP_MODE", process.env.REACT_APP_IP_MODE);
  switch (process.env.REACT_APP_IP_MODE) {
    case "development":
      baseURL = process.env.REACT_APP_DEV_URL;
      break;
    case "production":
      baseURL = process.env.REACT_APP_PROD_URL;
      break;
    default:
      baseURL = process.env.REACT_APP_QA_URL;
      break;
  }
  return baseURL;
};
export default getHost;
