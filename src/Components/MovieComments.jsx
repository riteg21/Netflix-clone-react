import { COMMENTS } from "../data/comments.data";

function MovieComments() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <ul className="space-y-4 w-auto">
        {COMMENTS.map((comment) => (
          <li
            key={comment.id}
            className="bg-neutral-800 p-5 rounded-lg shadow w-fit"
          >
            <input type="text" className="" />
            <p className="text-sm text-gray-400 mb-1">{comment.name}</p>
            <p className="text-white text-sm">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieComments;
