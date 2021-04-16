import { getPhotoUrl } from '../SessionLogic' 

function MessagePhoto(props) {
  return (
    <div className="flex-shrink-0 place-self-start mt-5">
      <img src={getPhotoUrl(props.username)} alt=""
          className="h-12 w-12 rounded-full" />
    </div>
  )
}

export default MessagePhoto;