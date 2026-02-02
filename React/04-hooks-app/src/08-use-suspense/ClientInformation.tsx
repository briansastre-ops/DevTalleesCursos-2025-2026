import { Usable, use } from "react";
import { type User } from "./api/get-user.actions";

interface Props {
  getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {
  const user = use(getUser);

  // useEffect(() => {
  // Aquí podrías llamar a una función para obtener los datos del usuario
  // y manejar el estado de carga si no estuvieras usando Suspense.
  //   getUserAction(id).then((user) => {
  //     console.log(user);
  //   });
  // }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>

      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-2xl">{user.role}</p>
    </div>
  );
};
