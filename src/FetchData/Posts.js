export default function Post({ post }) {
  const { title, body, id } = post;
  return (
    <>
      <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg">
        <p className="font-medium">
          {id}. {title}
        </p>
        <p>{body}</p>
      </div>
    </>
  );
}
