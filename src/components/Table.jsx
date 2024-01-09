import { LuDownload } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function Table() {
  return (
    <div className="relative shadow sm:rounded-lg">
      <div className="bg-white flex flex-col md:flex-row justify-between md:items-center space-y-3 py-4 px-6">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            id="table-search"
            className="block w-full pl-10 pr-3 py-2 border-[1.5px]  border-gray-200 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Search"
            type="search"
            name="search"
          />
        </div>

        <div className="flex gap-2 items-center">
          <button className="py-1 flex-1 px-2.5 border-[1.5px] rounded border-gray-200">
            Sort
          </button>
          <button className="py-1  px-2.5 border-[1.5px] rounded border-gray-200">
            <LuDownload className="h-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Order Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction fees
              </th>
            </tr>
          </thead>
          <tbody className="relative overflow-y-auto">
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
            <tr className="bg-white border-b gray-800 gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap white"
              >
                #201209
              </th>
              <td className="px-6 py-4">7 July, 2023</td>
              <td className="px-6 py-4">₹1,278.23</td>
              <td className="px-6 py-4">₹22</td>
            </tr>
          </tbody>
        </table>
        <div className="flex w-full gap-8 justify-center items-center py-3">
          <button className="py-1 w-28 flex justify-center items-center gap-1 px-2.5 border-[1.5px] rounded border-gray-200">
            <FaAngleLeft />
            Previous
          </button>
          <div className="md:flex hidden justify-center items-center gap-4">
            <span>1</span>
            <span>...</span>
            <button className="py-1 px-3 text-white rounded bg-blue-500">
              10
            </button>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
          </div>
          <button className="py-1 w-24 flex justify-center items-center gap-1 px-2.5 border-[1.5px] rounded border-gray-200">
            Next
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
