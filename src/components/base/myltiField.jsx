import Select from "react-select";

const MyltiField = ({ options, onChange, name, label }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : [];

  const handleChange = (value) => {
    onChange({ name, value: value });
  };

  return (
    <div className="mb-4">
      <label>{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        name={name}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
      />
    </div>
  );
};

export default MyltiField;
