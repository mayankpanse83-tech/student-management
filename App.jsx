import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Sidebar */}

      <div className="sidebar">

        <h2>EMS</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>⏰ Attendance</li>
          <li>📝 Daily Updates</li>
          <li>📋 Tasks</li>
          <li>🌴 Leave</li>
          <li>📊 Reports</li>
          <li>👤 Profile</li>
          <li>🔔 Notifications</li>
          <li>⚙ Settings</li>
        </ul>

      </div>

      {/* Main */}

      <div className="main">

        <div className="header">

          <h1>Employee Management System</h1>

          <button>Logout</button>

        </div>

        <div className="cards">

          <div className="card">
            <h2>150</h2>
            <p>Total Employees</p>
          </div>

          <div className="card">
            <h2>120</h2>
            <p>Present</p>
          </div>

          <div className="card">
            <h2>30</h2>
            <p>Absent</p>
          </div>

          <div className="card">
            <h2>18</h2>
            <p>Pending Tasks</p>
          </div>

        </div>

        <div className="attendance">

          <h2>Today's Attendance</h2>

          <button>Check In</button>
          <button>Break</button>
          <button>Resume</button>
          <button>Check Out</button>

        </div>

        <div className="update">

          <h2>Daily Work Update</h2>

          <input type="text" placeholder="Project Name" />

          <textarea
            placeholder="Today's Work"
            rows="4"
          ></textarea>

          <input
            type="number"
            placeholder="Hours Worked"
          />

          <input
            type="number"
            placeholder="Completion Percentage"
          />

          <textarea
            placeholder="Tomorrow Plan"
            rows="3"
          ></textarea>

          <textarea
            placeholder="Blockers"
            rows="3"
          ></textarea>

          <button>Submit</button>

        </div>

      </div>

    </div>
  );
}

export default App;