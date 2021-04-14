function MessageContent(props) {
  if(props.isSent){
    return (
      <div className="px-6 py-4">
        <div class="text-right text-xl font-medium text-black">You</div>
        <p class="text-gray-500">{props.content}</p>
      </div>
    )
  } else {
    return (
      <div className="px-6 py-4">
        <div class="text-left text-xl font-medium text-black">{props.name}</div>
        <p class="text-gray-500">{props.content}</p>
      </div>
    )
  }
}

export default MessageContent;