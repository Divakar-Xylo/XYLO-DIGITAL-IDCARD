import { RefreshCw, RotateCw } from "lucide-react";

export default function AdminLoading() {
    return (
        <div className="flex justify-center items-center h-screen">
             <RotateCw className="w-25 h-25 animate-spin" />
        </div>
    );
}
