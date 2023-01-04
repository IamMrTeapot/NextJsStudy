import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      This is review number {reviewId} for productId {productId}
    </div>
  );
}

export default Review;
