import { useRouter } from "next/router";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const router = useRouter();
    if (!localStorage.getItem(token)) {
        router.push('/auth/login')
    }
}