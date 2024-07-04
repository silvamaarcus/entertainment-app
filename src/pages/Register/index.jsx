import logo from "../../assets/svg/logo.svg";

const Register = () => {
  return (
    <>
      <div className="flex-center mt-7 ">
        <img src={logo} alt="Entertaiment App" className="logo" />
      </div>
      <div>
        <div className="grid-4"></div>
        <div className="grid-4 bg-black-20">
          <div className="p-4">
            <h4>Sign Up</h4>
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
              <input
                type="password"
                name="Password-r"
                placeholder="Repeat password"
                required
                className="mt-3"
              />
              <button className="btn w-100 mt-4">Create an account</button>
            </form>
            <div className="mt-3 flex-center gap-2">
              <p className="color-white">Already have an account?</p>
              <a href="" className="color-primary">
                Login
              </a>
            </div>
          </div>
        </div>
        <div className="grid-4"></div>
      </div>
    </>
  );
};
export default Register;