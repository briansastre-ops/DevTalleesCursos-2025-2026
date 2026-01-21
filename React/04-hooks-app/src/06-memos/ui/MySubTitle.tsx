interface Prorp {
  subtitle: string;
}
export const MySubTitle = ({ subtitle }: Prorp) => {
  console.log("mi subtitle re rende");
  return (
    <>
      <h6 className="text-2xl">{subtitle}</h6>
      <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">
        llamar a funcion
      </button>
    </>
  );
};
