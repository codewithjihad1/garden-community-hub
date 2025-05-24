import { Link } from "react-router";
import TipCard from "../components/TipCard";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../services/GetServices";


const BrowseTipsPage = () => {
  const [tipsData, setTipsData] = useState([])

  // get tips data
  const getTipsData = async () => {
    try {
      const res = await api.get('/tips?availability=Public')
      setTipsData(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getTipsData()
  }, [])


  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-700">🌱 Public Garden Tips</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-green-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left border">Image</th>
              <th className="py-2 px-4 text-left border">Title</th>
              <th className="py-2 px-4 text-left border">Category</th>
              <th className="py-2 px-4 text-left border">Level</th>
              <th className="py-2 px-4 text-center border">Action</th>
            </tr>
          </thead>
          <tbody>
            {tipsData.map((tip) => (
              <tr key={tip._id} className="hover:bg-green-50 transition">
                <td className="border px-4 py-2">
                  <img
                    src={tip.images}
                    alt={tip.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2 font-medium">{tip.title}</td>
                <td className="border px-4 py-2">{tip.category}</td>
                <td className="border px-4 py-2">{tip.difficulty}</td>
                <td className="border px-4 py-2 text-center">
                  <Link
                    to={`/tips/${tip._id}`}
                    className="inline-flex items-center gap-1.5 text-green-600 hover:underline"
                    title="View Details"
                  >
                    <FaEye /> See More
                  </Link>
                </td>
              </tr>
            ))}

            {tipsData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No public tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTipsPage;
