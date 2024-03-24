const SignUp = () => {
    return (
        <div className="App">
        <body>
          <div>
            <h1 className="purple-text">CatNip</h1>
            <h2>INSERT LOGO HERE</h2>
          </div>
          <div>
            <p>
              <form action="">
                <label for="username">Email</label>
                <br />
                <input
                  type="text"
                  id="username"
                  placeholder="Your email"
                  name="username"
                  required
                />
  
                <br />
                <label for="password">Password</label>
                <br />
                <input
                  type="text"
                  id="password"
                  placeholder="Your password"
                  name="password"
                  required
                />
                <br />
                <label for="confirm password">Confirm Password</label>
                <br />
                <input
                  type="text"
                  id="confirm password"
                  placeholder="Confirm your password"
                  name="confirm password"
                  required
                />
                <br />
                <button type="submit" className="custom-button">
                  Sign Up
                </button>
              </form>
              Already have an account? <a href="">Login in!</a>
            </p>
          </div>
        </body>
      </div>
    );
  }
  
  
  export default SignUp;