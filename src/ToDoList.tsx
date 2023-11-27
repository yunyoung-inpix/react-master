import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

// interface IFormData {
//   errors: {
//     email: {
//       message: string;
//     };
//   };
//   email: string;
//   firstName: string;
//   lastName: string;
//   password1: string;
//   password2: string;
//   other: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IFormData>();

//   const onValid = (data: IFormData) => {
//     console.log("hi");
//     if (data.password1 !== data.password2) {
//       setError("password1", { message: "Password are not the same" }, { shouldFocus: true });
//     }
//     // setError("extraError", { message: "Server offline" });
//   };

//   console.log(errors);

//   return (
//     <div style={{ padding: "20px" }}>
//       <form style={{ display: "flex", flexDirection: "column" }} handleValid={handleSubmit(onValid)}>
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })}
//           placeholder="email"
//         />
//         <span style={{ color: "white" }}>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "firstName is required",
//             validate: {
//               noYoung: (value) => (value.includes("young") ? "no young allowed" : true),
//               noNico: (value) => (value.includes("nico") ? "no nico allowed" : true),
//             },
//           })}
//           placeholder="First Name"
//         />
//         <span style={{ color: "white" }}>{errors?.firstName?.message}</span>
//         <input
//           {...register("password1", {
//             required: "Password1 is required.",
//             minLength: { value: 10, message: "Your password1 is too short." },
//           })}
//           placeholder="password1"
//         />
//         <span style={{ color: "white" }}>{errors?.password1?.message}</span>
//         <input
//           {...register("password2", {
//             required: "Password2 is required.",
//             minLength: { value: 10, message: "Your password2 is too short." },
//           })}
//           placeholder="password2"
//         />
//         <span style={{ color: "white" }}>{errors?.password2?.message}</span>
//         <input {...register("other", { required: "Other is required", minLength: 5 })} placeholder="other" />
//         <span style={{ color: "white" }}>{errors?.other?.message}</span>
//         <button type="submit">Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;
