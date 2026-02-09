

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-yellow-50">
        <h1 className="text-2xl font-bold mb-1">Welcome back!</h1>
        <h2 className="text-lg text-gray-600 mb-6">
          Job Application Tracker
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard title="Applied" value="12" color="bg-orange-400" />
          <StatCard title="Interviews" value="4" color="bg-blue-500" />
          <StatCard title="Offers" value="2" color="bg-green-500" />
          <StatCard title="Rejected" value="3" color="bg-red-500" />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-4 text-xl">Recent Applications</h3>

          <table className="w-full text-left">
            <thead className="text-yellow-700 bg-amber-200 text-lg">
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Status</th>
                <th>Applied On</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Notes</th>
                
                <th></th>
              </tr>
            </thead>

            <tbody>
              <TableRow
                company="Google Google "
                position="Front-End Developer"
                status="Interview"
                color="bg-blue-500"
                date="10/12/2023"
                location='Hyderabad'
                salary='4LPA'

              />
              <TableRow
                company="Google Google "
                position="Front-End Developer"
                status="Rejected"
                color="bg-red-500"
                date="10/12/2023"
                location='Hyderabad'
                salary='4LPA'
              />
              <TableRow
                company="Google Google "
                position="Front-End Developer"
                status="Interview"
                color="bg-blue-500"
                date="10/12/2023"
                location='Hyderabad'
                salary='4LPA'
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* Helpers */
const StatCard = ({ title, value, color }) => (
  <div className={`${color} text-white p-4 rounded-xl`}>
    <p className="text-sm">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);



const TableRow = ({ company, position, status, color, date ,location,salary,view}) => (
  <tr className="border-t">
    <td className="py-7  ">{company}</td>
    <td className="py-5  ">{position}</td>
    <td >
      <span className={`${color}  text-white px-3 py-1 rounded-full text-sm`}>
        {status}
      </span>
    </td>
    <td>{date}</td>
    <td>
      {location}
    </td>
    <td >
     {salary}
    </td>
    <td>
     <button className="border bg-[#e6a911] px-3 py-1 rounded-lg  hover:bg-[#FCE597]">View</button>
    </td>
  </tr>
);