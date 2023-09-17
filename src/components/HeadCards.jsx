import React from 'react'

function HeadCards({ data}) {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
  
      {
        data.map(item=>{
            return (
              <React.Fragment key={item.id}>
                {/*cards */}
                <div className="rounded-xl relative">
                  {/*overlay */}
                  <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">{item.titleOne}</p>
                    <p className="px-2">{item.titleTwo}</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                      {item.button}
                    </button>
                  </div>
                  <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src={item.image}
                    alt="/"
                  />
                </div>
              </React.Fragment>
            )
        })
      }
    </div>
  )
}

export default HeadCards
