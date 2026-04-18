const Notification = ({ notification }) => {
  if (!notification) {
    return null
  }

  const notificationStyle = {
    color: notification.type === 'error' ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: '20px',
    border: `3px solid ${notification.type === 'error' ? 'red' : 'green'}`,
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  return <div style={notificationStyle}>{notification.message}</div>
}

export default Notification