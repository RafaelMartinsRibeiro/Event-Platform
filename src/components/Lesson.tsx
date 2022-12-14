import { format, isPast } from "date-fns";
import { CheckCircle, Lock } from "phosphor-react";
import ptBR from "date-fns/locale/pt-BR"

interface LessonProps {
  title: string;
  availableAt: Date;
  slug: string;
  type: "live" | "class";
}

export const Lesson = (props: LessonProps) => {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  return (
    <a href="#">
      <span className="text-gray-300 ">{availableDateFormatted}</span>

      <div className="border rounded border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-green-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-white text-xs border rounded border-purple-300 py-[0.125rem] px-2 font-bold ">
            {props.type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
};
