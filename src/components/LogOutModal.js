import React from 'react'
import logout from '../../utils/logout'

const LogOutModal = () => {
  return (
    <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true" style={{right: '0px', top: '0px'}}>
      {/* 
        Background backdrop, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      */}
      <div className="fixed inset-0 bg-gray-100 bg-opacity-35 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen right-0">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* 
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          */}
          <div className="absolute transform py-2 right-16 top-12 px-7 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-3/12">
          <div>
            <h1>Do you want to Log Out?</h1>

            <div>
                <button onClick={logout}>YES</button>
                <button>NO</button>
            </div>
          </div>
            





            
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogOutModal