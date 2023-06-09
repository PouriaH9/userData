import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[^0-9]+$/, "Name should not contain numbers")
    .required("Name is required"),
  lastName: Yup.string()
    .matches(/^[^0-9]+$/, "Last name should not contain numbers")
    .required("Last name is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^(\+98|0)?9\d{9}$/, "Invalid phone number"),
  birthday: Yup.date().required("Birthday is required"),
  biography: Yup.string().required("Biography is required"),
});

const initialValues = {
  name: "",
  lastName: "",
  phoneNumber: "",
  birthday: "",
  biography: "",
};

const UserForm = () => {
  return (
    <div className="bg-violet-800 h-full w-1/2">
      <h1 className="text-center text-3xl my-4 text-white">Form</h1>
      <div className="mx-auto w-4/5 border-t-2 border-white"></div>
      {/* FORM */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted:", values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-white mt-12">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 text-white">
                Last Name:
              </label>
              <Field
                type="text"
                name="lastName"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block mb-2 text-white">
                Phone Number:
              </label>
              <Field
                type="text"
                name="phoneNumber"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </div>
              )}
            </div>

            <div>
              <label className="block  mb-2 text-white" htmlFor="biography">
                Biography:
              </label>
              <Field
              className="w-full h-40 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline resize-none"
              as="textarea" name="biography" />
              {errors.biography && touched.biography && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.biography}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="birthday" className="block mt-4  mb-2 text-white">
                Birthday:
              </label>

              <DatePicker
                className="rtl:pr-4 p-2"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
              />
              {errors.birthday && touched.birthday && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.birthday}
                </div>
              )}
            </div>

            <button
              className="block font-bold mb-2 text-white border-2 py-2 px-5 rounded"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
