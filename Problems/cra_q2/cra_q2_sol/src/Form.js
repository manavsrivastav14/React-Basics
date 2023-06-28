// Complete the Form Component and export it

function handleSubmit(e) {
  e.preventDefault();
}

const Form = () => (
  <>
    <div>
      <h3>Login Page</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* Create a h3, 2 inputs and 1 button here */}
        <input placeholder="Your Name" type="text" />
        <input placeholder="xyz@pqr.com" type="email" />
        <button>Login</button>
      </form>
    </div>
  </>
);

export default Form;
