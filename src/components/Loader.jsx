import React from 'react'

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
      <div className="mr-4">
        <svg className="animate-spin h-10 w-10 text-white" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.83 3 7.938l3-2.647zm8 6.647c1.863-2.108 3-4.896 3-7.938h-4a7.962 7.962 0 01-2 5.291l3 2.647zM12 20c1.381 0 2.657-.35 3.787-.945l-3-5.196A7.968 7.968 0 0112 20zM5.213 4.945C6.343 4.35 7.619 4 9 4V0a8.007 8.007 0 00-3.787 4.945z"
          ></path>
        </svg>
      </div>
      <div>Loading...</div>
    </div>
  </div>
  )
}

export default Loader