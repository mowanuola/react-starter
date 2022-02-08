const Login = () => {
  return (
    <div className="flex m-auto flex-col w-64">
      <h1 className="text-center mt-5 text-2xl">Welcome Back!</h1>
      <input type="text" placeholder="Email" className="border p-1 my-3 rounded outline-0" />
      <input type="password" placeholder="Password" className="border p-1 rounded outline-0"/>
      <button className="mt-3 rounded bg-primary w-32 m-auto text-white p-2">Login</button>
    </div>
  )
}

export default Login
