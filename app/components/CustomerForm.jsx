import React from 'react'

const CustomerForm = () => {
  return (
    <div>
      <div className="bg-gray-200 p-10">
        <div className="bg-white my-5 px-5 py-10 mx-auto max-w-7xl rounded-2xl">
          <p className="text-3xl font-bold my-5">Customer Contact</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil
            molestiae quasi, nobis quam fugit consectetur id laborum, quas
            doloribus tenetur?
          </p>
          <form action="">
            <label
              htmlFor="companyName"
              className="block text-gray-700 text-sm font-bold mb-2"
            ></label>
            <input
              id="companyName"
              type="text"
              placeholder="Enter your company name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm