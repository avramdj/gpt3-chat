import { Redirect } from "react-router";

function Page404(props) {

  return (
    <Redirect to={{pathname: '/', state: {from: props.location}}} />
  );
}

export default Page404;