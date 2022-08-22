

const SelectUser = ({users, selectedUserId, setSelectedUser}) => {

  const onUserChange = (event) => setSelectedUser(event.target.value)
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <select id="activeUser" value={selectedUserId} onChange={onUserChange}>
      <option value="">Выберите пользователя</option>
      {usersOptions}
    </select>
  )
}

export default SelectUser