import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (user) {
          router.push("/booking-history");
        } else {
          router.push("/sign-in");
        }
      }
    }, [user, loading, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
