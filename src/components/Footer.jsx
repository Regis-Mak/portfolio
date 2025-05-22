import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 pt-1 flex flex-wrap justify-center items-center">
            {/* <p className="text-sm text-muted-foreground"> 
                &copy; {new Date().getFullYear()} Regis Mak. All rights reserved
            </p> */}
            
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={35}/>
            </a>
        </footer>
    );
}