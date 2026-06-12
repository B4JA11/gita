function UserCard({ user }) {
    const cardClass = user.role === "Admin" ? "card admin-card" : "card user-card";
  
    return (
      <div className={cardClass}>
        <img src={user.photo} alt={user.name} />
        <h2>{user.name}</h2>
        <p>ასაკი: {user.age}</p>
        <p>როლი: {user.role}</p>
        
        <div className="skills-container">
          {user.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    );
  }
  
  export default UserCard;