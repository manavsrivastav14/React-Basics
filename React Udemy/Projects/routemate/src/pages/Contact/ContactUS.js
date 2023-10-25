import { useNavigate } from "react-router-dom";

export const ContactUS = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  };

  return (
    <>
      <div className="component">Contact USA</div>
      <button onClick={handleSubmit}>Submit Form</button>
    </>
  );
};
