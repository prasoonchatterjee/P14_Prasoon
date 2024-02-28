const WithLogging = (props) => {
  console.log("withlogging rendered")
  return props.children
}

export default WithLogging;