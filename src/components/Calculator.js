import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Calculator = () => {
  // useState Hooks -- state management 
  const [val, setValue] = useState('');

  // Clear the output screen
  const handleClear = () => {
    try {
      setValue(val.slice(0, -1));
    } catch (error) {
      setValue('');
    }
  };

  // Expression calculation function
  const handleCalculate = () => {
    try {
      setValue(eval(val));
    } catch (error) {
      setValue('ERR');
      setTimeout(() => { setValue(''); }, 1000);
    }
  };

  return (
    <div>
      {/* title of the web app */}
      <Helmet>
        <title>Calculator</title>
      </Helmet>

      {/* container */}
      <div className="container border-1 border-radius-2 bg-dark-subtle text-emphasis-dark">
        <div className="row">
          <div className="col-9 w-100">
            <h1 className="display-6 fw-bolder text-center text-secondary-emphasis">
              Calculator
            </h1>
            {/* o/p screen */}
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="card text-center mb-5 shadow">
                  <div className="card-body bg-dark">
                    <input
                      type="text"
                      className="form-control mb-4 text-center bg-light fs-4 text-black shadow border border-black"
                      value={val}
                    ></input>

                    {/* buttons */}
                    {/* Clear button */}
                    <div className="row justify-content-end">
                      <div className="col-9">
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="%"
                          onClick={(e) => { setValue(val + e.target.value); }}
                        >
                          %
                        </button>
                        <button
                          className="btn bg-white text-warning p-4 m-1 shadow" value="C/CE"
                          onClick={handleClear}
                        >
                          C/CE
                        </button>
                      </div>
                    </div>

                    {/* frist row 1/2/3/-*/}
                    <div className="row justify-content-center">
                      <div className="col-12 m-2">
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="1"
                          onClick={(e) => { setValue(val + e.target.value); }}
                        >
                          1
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="2"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          2
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="3"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          3
                        </button>
                        <button
                          className="btn bg-white text-black p-4 px-4 m-1 shadow" value="-"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          -
                        </button>
                      </div>
                    </div>

                    {/* second row 4/5/6/+ */}
                    <div className="row justify-content-center">
                      <div className="col-12 m-2">
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="4"
                          onClick={(e) => { setValue(val + e.target.value); }}
                        >
                          4
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="5"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          5
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="6"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          6
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="+"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* thrid row 7/8/9/*  */}
                    <div className="row justify-content-center">
                      <div className="col-12 m-2">
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="7"
                          onClick={(e) => { setValue(val + e.target.value); }}
                        >
                          7
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="8"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          8
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="9"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          9
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="*"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          *
                        </button>
                      </div>
                    </div>

                    {/* fourth row ./0///= */}
                    <div className="row justify-content-center">
                      <div className="col-12 m-2">
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="."
                          onClick={(e) => { setValue(val + e.target.value); }}
                        >
                          .
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="0"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          0
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="/"
                          onClick={(e) => setValue(val + e.target.value)}
                        >
                          /
                        </button>
                        <button
                          className="btn bg-white text-black p-4 m-1 shadow" value="="
                          onClick={handleCalculate}
                        >
                          =
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 w-100">
            <div className="card" >
              <div className="card-body">
                <h6>Note</h6>
                <p># While using percentage format must be like 80/100 = 0.8</p>
                <p># Always write 1-9 number as a single digit. (Ex: 9 and not like 09)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
