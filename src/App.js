import React, {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
  const [people, setpeople] = useState([]);
  const [search, setsearch] = useState("");
  const getproductdata = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    console.log(res.data);
    setpeople(res.data);
  };

  useEffect(() => {
    getproductdata();
  }, []);

  return (
    <div className='container'>
      <input
        className='form-control col-lg-4 my-2'
        type='text'
        onChange={(e) => setsearch(e.target.value)}
        name=''
        id=''
        placeholder='search here'
      />
      <div className='card  responsivetable p-0'>
        <table className='table '>
          <thead>
            <tr>
              <th className='sticky-top bg-dark text-white'>Id</th>
              <th className='sticky-top bg-dark text-white'>Name</th>
              <th className='sticky-top bg-dark text-white'>Email</th>
            </tr>
          </thead>
          <tbody>
            {people
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (item.email.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              })
              .map((view) => (
                <tr key={view.id}>
                  <td>{view.id}</td>
                  <td>{view.name}</td>
                  <td>{view.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
