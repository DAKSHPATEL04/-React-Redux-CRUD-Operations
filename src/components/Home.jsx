import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Reducer/UserReducer";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 w-full max-w-5xl px-4">
          {/* Header Section */}
          <div className="w-full flex justify-between items-center mt-8 mb-4">
            <label className="text-3xl md:text-4xl font-bold text-white">
              Table Data
            </label>
            <Link
              to={"/create"}
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Create +
            </Link>
          </div>

          {/* Table Section */}
          <div className="h-screen w-full overflow-auto">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden border border-gray-700 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-900 bg-gray-700 rounded-lg">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase">
                            ID
                          </th>
                          <th className="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase">
                            Name
                          </th>
                          <th className="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase">
                            Email
                          </th>
                          <th className="px-6 py-3 text-end text-xs font-medium text-gray-100 uppercase">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-600">
                        {user.map((user, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                              {user.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                              {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                              {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <Link
                                to={`/edit/${user.id}`}
                                className="inline-flex mr-5 items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-600"
                              >
                                🖌️ Edit
                              </Link>
                              <button
                                type="button"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-600"
                                onClick={() => handelDelete(user.id)}
                              >
                                ❌ Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {user.length === 0 && (
                          <tr>
                            <td
                              colSpan={4}
                              className="text-center text-white py-8"
                            >
                              No users found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
