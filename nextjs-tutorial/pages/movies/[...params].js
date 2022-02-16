import { useRouter } from "next/router";
import Seo from "../../components/Seo";

/* export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
} */

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
