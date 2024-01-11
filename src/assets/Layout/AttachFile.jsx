import { useForm } from "react-hook-form";


const AttachFile = () => {
      const { register, handleSubmit } = useForm();
      const onsubmit = (data) => {
            console.log(data);
      };
      return (
            <form onSubmit={handleSubmit(onsubmit)}>
                  <input ref={register} type="file" name="" />
                  <button>Submit</button>

            </form>
      );
};

export default AttachFile;