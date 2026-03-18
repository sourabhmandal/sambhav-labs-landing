
interface Product {
    id: string;
    name: string;
    tag: string;
    description: string;
    status: "Live" | "Beta" | "Open Source" | "Coming Soon";
    tech: string[];
    href: string;
}