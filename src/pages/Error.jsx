import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <strong className="font-extrabold text-red-700 sm:block">
              Error 404
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            La seccion de la pagina esta dada de baja o existe algun error en el servidor, perdone las molestias
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/">
              <span
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Volver a Inicio
              </span>
            </Link>
            <Link>
              <span
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about"
              >
                Ver Los productos
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
