interface Props {
  type: string;
  title: string;
  required: boolean;
  placeholder: string;
  isValid: boolean;
  errorMessage: string;
}

export default function InputField({
  type,
  title,
  required,
  placeholder,
  isValid,
  errorMessage,
}: Props) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <input
        id={title}
        name={title}
        type={type}
        required={required}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
      {!isValid && <p>{errorMessage}</p>}
    </>
  );
}
