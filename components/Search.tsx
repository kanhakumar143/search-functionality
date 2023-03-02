import React, { useEffect, useState } from "react";

const Search = () => {
  const da = [
    {
      color: "purple",
      type: "bike",
      capacity: 7,
    },
    {
      color: "red",
      type: "bus",
      capacity: 7,
    },
    {
      color: "black",
      type: "scotty",
      capacity: 7,
    },
    {
      color: "green",
      type: "bike",
      capacity: 7,
    },
    {
      color: "green",
      type: "bus",
      capacity: 7,
    },
    {
      color: "white",
      type: "scotty",
      capacity: 7,
    },
  ];
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState({
    is: false,
    val: "",
  });

  useEffect(() => {
    setData(da);
  }, []);

  const HandleSearch = () => {
    const res = da.filter((e) => e.color === search);
    setData(res);
  };

  useEffect(() => {
    if (check.is) {
      HandleCheck(check.val);
    } else {
      setData(da);
    }
  }, [check]);

  const HandleCheck = (str: string) => {
    const res = da.filter((e) => e.type === str);
    setData(res);
  };

  return (
    <>
      <div className="bg-white h-screen w-screen">
        <div className="w-full pt-12 flex flex-col justify-center items-center">
          <div className="">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="choose color"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white text-black border border-slate-400 p-1"
              />
              <button
                className="text-black border border-slate-400 p-1"
                onClick={() => HandleSearch()}
              >
                Search
              </button>
              <button
                className="text-black border border-slate-400 p-1"
                onClick={() => {
                  setData(da);
                  setSearch("");
                }}
              >
                Reset
              </button>
            </div>

            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    setCheck({ ...check, is: !check.is, val: "bike" });
                  }}
                />
                <p className="text-black">Bike</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    setCheck({ ...check, is: !check.is, val: "bus" });
                  }}
                />
                <p className="text-black">Bus</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  onChange={() => {
                    setCheck({ ...check, is: !check.is, val: "scotty" });
                  }}
                />
                <p className="text-black">Scotty</p>
              </div>
            </div>

            <div className="text-black mt-4">
              <table>
                <thead>
                  <tr>
                    <td>Color</td>
                    <td>Type</td>
                    <td>Capacity</td>
                  </tr>
                </thead>
                <tbody>
                  {data && data.length > 0 ? (
                    data.map((e, i) => (
                      <>
                        <tr>
                          <td>{e.color}</td>
                          <td>{e.type}</td>
                          <td>{e.capacity}</td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                      <tr>
                        <td>Data NotFound</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
