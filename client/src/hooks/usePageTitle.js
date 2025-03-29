import { useEffect } from "react"

export const usePageTitle = (title) => {
    useEffect(() => {
        document.title = `Recipe Master | ${title}`;
    }, []);
}