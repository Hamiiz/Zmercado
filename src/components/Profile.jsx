export default function Profile({ user }) {
  return (
    <>
      <div className="profile"></div>
    </>
  );
}

export function Avatar({ user }) {
  if (!user.img) {
    // components/InitialsAvatar.jsx
}
}

function InitialsAvatar({ name }) {
  const getInitials = (name) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
      {initials}
    </div>
  );
}