import { useNavigate } from "react-router-dom";

export const ContactEU = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  };

  return (
    <>
      <div className="component">Contact Europe</div>
      <button onClick={handleSubmit}>Submit Form</button>
    </>
  );
};
