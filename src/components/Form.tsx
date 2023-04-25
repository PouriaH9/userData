import { useForm } from "react-hook-form";

interface FormData {
  [key: string]: string | number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FormData) => console.log(data);
  console.log(errors);

  return (
    <div className="bg-violet-800 h-full w-1/2">
      <h1 className="text-center text-3xl my-4 text-white">Form</h1>
      <div className="mx-auto w-4/5 border-t-2 border-white"></div>
    </div>
  );
};

export default Form;
