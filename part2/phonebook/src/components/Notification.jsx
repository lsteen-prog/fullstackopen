const Notification = ({ message, isError }) => {

    if (message === "") {
      return null
    }
  
    const type = isError ? 'error' : 'message'

    return (
      <div className={type}>
        {message}
      </div>
    )
  }

export default Notification