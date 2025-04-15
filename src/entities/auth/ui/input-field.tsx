interface Props {
  id: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
  isInValid: boolean;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function PasswordField({
  type,
  id,
  isRequired,
  placeholder,
  isInValid,
  errorMessage,
  onChange,
  onBlur,
}: Props) {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={isRequired}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isInValid && <p>{errorMessage}</p>}
    </>
  );
}
