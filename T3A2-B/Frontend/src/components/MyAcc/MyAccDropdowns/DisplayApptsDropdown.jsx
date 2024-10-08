import DisplaySingleAppt from "../DisplaySingleAppt";

const DisplayApptsDropdown = ({ upcomingAppts, pastAppts }) => {
  const genApptsHtml = (appts) => {
    return appts.map((appt) => {
      return <DisplaySingleAppt appt={appt} key={appt._id} />;
    });
  };

  return (
    <div className="update-account-box">
      <h4>Appointment History</h4>
      <h5>Upcoming Appointments:</h5>
      <>{genApptsHtml(upcomingAppts)}</>
      <h5>Past Appointments:</h5>
      <>{genApptsHtml(pastAppts)}</>
    </div>
  );
};

export default DisplayApptsDropdown;
