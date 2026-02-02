export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log("funcion llamada");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Funcion resuelta");
  return {
    id: id,
    name: "Brian Sastre",
    location: "Ottawa, Canada",
    role: "Developer",
  };
};
