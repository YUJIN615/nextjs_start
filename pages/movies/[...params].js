import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  const [id, title] = router.query.params;
  return (
    <div>
      <h2>{title || "Loading..."}</h2>
    </div>
  )
}