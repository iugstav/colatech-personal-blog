export function LogInAdvice() {
  return (
    <div className="w-full bg-white border border-bg-emphasis rounded mb-3 flex flex-col items-center">
      <p className="text-lg text-read-black font-semibold w-[240px] mt-2">
        Entre com uma conta para interagir com os posts e deixar avaliações.
      </p>
      <p className="text-sm text-normal-gray w-[240px] mt-1 mb-5">
        Interações e avaliações são importantes para medir a qualidade do
        conteúdo!
      </p>

      <button className="w-[240px] border h-10 mb-3 rounded border-main-purple text-main-purple font-medium transition-colors duration-75 hover:bg-main-purple hover:text-white">
        Criar conta
      </button>
      <button className="w-[240px] border h-10 mb-4 rounded border-normal-gray text-normal-gray font-medium transition-colors duration-75 hover:bg-normal-gray hover:text-white">
        Entrar
      </button>
    </div>
  );
}
