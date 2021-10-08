import Todo from "./Todo";

const Container = () => {
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created_At</th>
                <th className="px-4 py-3">Updated_At</th>
              </tr>
            </thead>
            <Todo></Todo>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Container;
