import { ChevronDown, LayoutGrid, List, } from 'lucide-react';

function Filter() {
    return (
        <div className="flex flex-col items-center gap-20 py-6 justify-between lg:flex-row">
            <div>
                <h6 className='text-h6li text-secondary '>Showing All 12 results</h6>
            </div>

            <div className='flex items-center text-center gap-3 flex-row '>

                <h6 className='text-h6li text-secondary'>Views:</h6>
                <button className=' border rounded border-[#ECECEC] w-11 h-11 flex items-center justify-center  '><LayoutGrid size={16} /></button>
                <button className='border rounded border-[#ECECEC]  w-11 h-11 flex items-center justify-center'><List size={16} /></button>

            </div>

            <section className='gap-4 flex flex-row'>


                <details className="relative w-[141px] group border rounded-sm border-[#F9F9F9] bg-[#F9F9F9] text-p text-secondary ">
                    <summary className="list-none cursor-pointer border px-4 h-[48px] flex items-center justify-between rounded">
                        <span className="peer">Popularity</span>
                        <span className="transition group-open:rotate-180"><ChevronDown /> </span>
                    </summary>

                    <div className="absolute top-full left-0 w-full bg-white border rounded mt-1 shadow z-10 p-2 space-y-2">

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="sort"
                                defaultChecked
                                className="peer hidden"
                            />
                            <span className="peer-checked:font-semibold">
                                Short By
                            </span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sort" className="peer hidden" />
                            <span className="peer-checked:font-semibold">
                                Newest
                            </span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sort" className="peer hidden" />
                            <span className="peer-checked:font-semibold">
                                Price: Low to High
                            </span>
                        </label>

                    </div>

                </details>
                <button className='bg-blu w-24 h-12 rounded text-h6li text-light'>Filter</button>
            </section>


        </div>

    )
}

export default Filter