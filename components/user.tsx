function User({ user = { name: "null", email: "null" } }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
