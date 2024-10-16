import { useParams } from "react-router-dom";
import profileImg from "./profile.png";
import Posts from "./Posts";

const dummyUser = {
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password1234",
  role: "Student",
  graduationYear: 2026,
  skills: ["JavaScript", "React", "Node.js"],
  connections: ["test", "test2", "test3"],
};

const Profile = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="profile">
      <div className="profile-top">
        <img src={profileImg} alt="" className="profile-img" />
        <div className="profile-info">
          <h1 className="profile-username">{params.id}</h1>
          <div className="profile-grad">
            <p className="profile-year">
              Graduation Year: {dummyUser.graduationYear}
            </p>
            <span className="profile-role">{dummyUser.role}</span>
          </div>
          <div className="profile-skills">
            {dummyUser.skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
          <div className="profile-connections">
            <p>{dummyUser.connections.length} Connections</p>
            <button>Connect</button>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
