import { DiscordLogo, Lightning } from "phosphor-react";

export const Video = () => {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 rounded-full border-2 border-green-500"
                src="https://github.com/RafaelMartinsRibeiro.png"
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="text-2xl font-bold block">Rafael Martins</strong>
                <span className="text-sm text-gray-200 block">
                  Front-end Developer
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-purple-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-700 transition-colors "
            >
              <DiscordLogo size={24} />
              Comunidade no Discord
            </a>

            <a
              href=""
              className="text-green-500 p-4 text-sm border border-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};
