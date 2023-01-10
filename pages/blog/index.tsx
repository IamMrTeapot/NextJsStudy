import React from "react";

function index() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(user, password);

  return (
    <>
      <div>blog home page</div>
      <h1> You cant see this {process.env.DB_USER}</h1>
      <h1> but if it has the next_public tag, you will see this password</h1>
      <h2>the password is {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>
    </>
  );
}

export default index;
