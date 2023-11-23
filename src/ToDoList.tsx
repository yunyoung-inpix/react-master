import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} placeholder="write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

interface IFormData {
  errors: {
    email: {
      message: string;
    };
  };
  email: string;
  password1: string;
  password2: string;
  other: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>();
  console.log(errors);

  const onValid = (data: IFormData) => {
    console.log(data.password1);
    // console.log("hi");
    // if (data.password1 !== data.password2) {
    //   console.log("비밀번호 확인");
    //   setError("password1", { message: "Password are not the same" });
    // }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
        <span style={{ color: "white" }}>{errors?.email?.message}</span>
        <input
          {...register("password1", {
            required: "Password1 is required.",
            minLength: { value: 10, message: "Your password1 is too short." },
          })}
          placeholder="password1"
        />
        <span style={{ color: "white" }}>{errors?.password1?.message}</span>
        <input
          {...register("password2", {
            required: "Password2 is required.",
            minLength: { value: 10, message: "Your password2 is too short." },
          })}
          placeholder="password2"
        />
        <span style={{ color: "white" }}>{errors?.password2?.message}</span>
        <input {...register("other", { required: "Other is required", minLength: 5 })} placeholder="other" />
        <span style={{ color: "white" }}>{errors?.other?.message}</span>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
