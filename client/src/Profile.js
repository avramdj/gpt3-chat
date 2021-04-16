import NavBar from "./components/NavBar";
import { UserLogin, getPhotoUrl } from "./SessionLogic";
import { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux'
import axios from "axios";

function Profile(props) {

  const [editMode, setEditMode] = useState(false)
  const [file, setFile] = useState(null)

  const inputFileButton = useRef(null) 

  useEffect(() => {
    // axios({
    //   method: 'post',
    //   'Content-Type': 'application/json',
    //   url: `${protocol}://${backendUrl}/api/user/login`,
    //   validateStatus: false,
    // })
  }, [file])

  const selectPhoto = () => {
    inputFileButton.current.click();
  };

  const fileChanged = (event) => {
    setFile(event.target.files[0])
  }
  
  return (
    <div className="h-screen">
      <div className="h-1/10">
        <NavBar user={props.user} />
      </div>
      <div class="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
      <div class="relative h-40">
        <img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>
      </div>
      <div onClick={selectPhoto} class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <input type='file' id='file' onChange={fileChanged} ref={inputFileButton} style={{display: 'none'}}/>
          <img class="object-cover w-full h-full" src={getPhotoUrl(props.user.username)}/>
      </div>
      <div class="mt-16">
        <h1 class="text-lg text-center font-semibold">
            {props.user.username}
        </h1>
        <p class="text-sm text-gray-600 text-center">
          {props.user.email}
        </p>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.userInfo
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logIn: (userInfo, token) => dispatch(logIn(userInfo, token)),
//     logOut: () => dispatch(logOut()),
//   }
// }

export default connect(mapStateToProps, null)(Profile);