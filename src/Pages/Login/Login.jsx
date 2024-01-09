import loginImage from "./login.png";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
  };

  const handleVerify = (value2) => {
    console.log(value2);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 font-mono uppercase ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-2/5">
            <img src={loginImage} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input  rounded-none outline-none hover:border-none focus:border-none focus:border-0"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input  rounded-none outline-none hover:border-none focus:border-none focus:border-0"
                  required
                />
              </div>
              <div className="form-control">
                {" "}
                <GoogleReCaptchaProvider reCaptchaKey="6LdNfUopAAAAAPDVACg3c_qQx1frqy9kINaNNAQ3">
                  <GoogleReCaptcha onVerify={handleVerify} />
                </GoogleReCaptchaProvider>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary  rounded-none">Login</button>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
