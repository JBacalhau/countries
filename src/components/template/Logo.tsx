import Link from "next/link";
import useResetFilters from "@/hooks/useResetFilters";

interface LogoProps {
    resetFilters: () => void;
}

export default function Logo({ resetFilters }: LogoProps) {
    const handleReset = useResetFilters(resetFilters);

    return (
        <div onClick={handleReset}>
            <Link
                href="/"
                className="font-extrabold text-base md:text-lg cursor-pointer"
            >
                Where in the world?
            </Link>
        </div>
    );
}
