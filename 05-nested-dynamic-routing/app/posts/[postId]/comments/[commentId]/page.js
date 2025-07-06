export default function CommentPage({ params }) {
    return (
      <div>
        <h2>Post ID: {params.postId}</h2>
        <p>Comment ID: {params.commentId}</p>
      </div>
    );
  }