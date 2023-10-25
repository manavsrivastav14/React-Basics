import { useNavigate } from "react-router-dom";

export const ContactIn = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  };

  return (
    <>
      <div className="component">Contact India</div>
      <button onClick={handleSubmit}>Submit Form</button>
    </>
  );
};
