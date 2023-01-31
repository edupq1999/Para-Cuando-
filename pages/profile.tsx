import Layout from '../components/Layout';

export default function Profile() {
  return (
    <Layout>
      <div>
        <div className="h-44 mb-6 flex justify-center align-middle bg-blue ralative">
          <div className="h-40 w-40 border-solid border-2 border-[grey]  rounded-full mt-24"></div>
        </div>

        <div className="flex justify-center mt-32 gap-10">
          <button className="border-solid border-2 border-[grey] text-[grey] p-2 rounded-full w-36">
            Mis votos
          </button>
          <button className="border-solid border-2 border-[grey] text-[grey] p-2 rounded-full w-40">
            Mis publicaciones
          </button>
        </div>

        <div className="flex justify-center align-middle">
          <button className="border-none rounded-full bg-blue text-white w-36 h-12 mt-50 mb-50">
            Ver más
          </button>
        </div>
      </div>
    </Layout>
  );
}
