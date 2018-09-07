handleRegisterUser = e => {
  e.preventDefault();

  const newUser = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    password: this.state.password
  };

  axios.post("/api/users/register", newUser).then(res => {
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
  });
};
