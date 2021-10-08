const Todo = () => {
  return (
    <tbody className="bg-white">
      <tr className="text-gray-700">
        <td className="px-4 py-3 border">
          <div className="flex items-center text-sm">
            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold text-black">Sufyan</p>
              <p className="text-xs text-gray-600">Developer</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-ms font-semibold border">22</td>
        <td className="px-4 py-3 text-xs border">
          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
            {" "}
            Finished{" "}
          </span>
        </td>
        <td className="px-4 py-3 text-sm border">6/4/2000</td>
        <td className="px-4 py-3 text-sm border">6/4/2000</td>
      </tr>
    </tbody>
  );
};
export default Todo;
