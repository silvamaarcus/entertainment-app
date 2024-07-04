import logo from "../../assets/svg/logo.svg";

const Login = () => {
  return (
    <>
      <div className="flex-center mt-7 ">
        <img src={logo} alt="Entertaiment App" className="logo" />
      </div>
      <div>
        <div className="grid-4"></div>
        <div className="grid-4 bg-black-20">
          <div className="p-4">
            <h4>Login</h4>
            <form action="POST" className="mt-4">
              <input
                type="email"
                name="Email"
                placeholder="Email adress"
                required
              />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                required
                className="mt-3"
              />
              <button className="btn w-100 mt-4">Login to your acount</button>
            </form>
            <div className="mt-3 flex-center gap-2">
              <p className="color-white">Don’t have an account?</p>
              <a href="" className="color-primary">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="grid-4"></div>
      </div>
    </>
  );
};
export default Login;
