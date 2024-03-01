
export default function SearchComponent() {

     return (
          <>
               <div className="mb-2 mt-8 w-full flex justify-center">
                    <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-10 w-full sm:w-5/6 md:w-4/5 px-3 py-4 shadow-lg border border-slate-100 rounded-lg ">
                         <div>
                              <input type="text" placeholder="Search" className="w-full p-2 border border-slate-100 rounded-md" />
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <select className="w-full border border-slate-100 rounded-md p-2" />
                              <select className="w-full border border-slate-100 rounded-md p-2" />
                         </div>
                    </div>
               </div>
          </>
     );
}