import UserCard from './UserCard';
import './App.css';

function App() {
  const users = [
    {
      id: 1,
      name: "ლუკა ბაჯაძე",
      age: 28,
      role: "Admin",
      skills: ["React", "JavaScript", "Node.js"],
      photo: "https://picsum.photos/150?random=1"
    },
    {
      id: 2,
      name: "ნინო კაპანაძე",
      age: 24,
      role: "User",
      skills: ["HTML", "CSS", "UI/UX"],
      photo: "https://picsum.photos/150?random=2"
    },
    {
      id: 3,
      name: "ლუკა მახარაძე",
      age: 31,
      role: "Admin",
      skills: ["Python", "Django", "SQL"],
      photo: "https://picsum.photos/150?random=3"
    },
    {
      id: 4,
      name: "ანა ჭელიძე",
      age: 22,
      role: "User",
      skills: ["Figma", "React Native", "Git"],
      photo: "https://picsum.photos/150?random=4"
    }
  ];

  return (
    <div className="app-container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;