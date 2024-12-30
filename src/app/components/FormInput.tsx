interface FormInputProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const FormInput: React.FC<FormInputProps> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
  }) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="form-input"
        />
      </div>
    );
  };
  
  export default FormInput;
  