const FormInput = ({ label, name, type, placeholder }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered"
      />
    </div>
  );
};
export default FormInput;
