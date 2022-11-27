export const validateData = (data, setError) => {
  function checkEmail(input) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.trim())) {
      setError((previus) => ({
        ...previus,
        email: "",
      }));
    } else {
      setError((previus) => ({
        ...previus,
        email: `Please enter a valid email address`,
      }));
    }
  }
  checkEmail(data.email);
};
