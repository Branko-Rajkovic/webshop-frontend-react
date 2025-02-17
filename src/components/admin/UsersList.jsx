import useFetchData from "../../hooks/useFetchData";

// Custom hook to fetch user data
export default function UsersList() {
  const { data, error } = useFetchData(
    "https://api.escuelajs.co/api/v1/users/"
  );

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">User List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow-lg">
            <img
              src={user.avatar === "image.exam" ? "/avatar.png" : user.avatar}
              alt={user.name}
              className="object-cover w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-2 text-lg font-semibold text-center">
              {user.name}
            </h3>
            <p className="text-center text-gray-700">{user.email}</p>
            <p>{user.role}</p>
            <div className="mt-4">
              <h4 className="font-semibold">Reviews:</h4>
              <ul className="pl-5 text-sm list-disc">
                {user.reviews && user.reviews.length > 0 ? (
                  user.reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                  ))
                ) : (
                  <li>No reviews available</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
