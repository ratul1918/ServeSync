import { Edit, Trash2, Power } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    isAvailable: boolean;
};

interface MenuItemCardProps {
    item: MenuItem;
    onEdit: (item: MenuItem) => void;
    onDelete: (id: string) => void;
    onToggleAvailability: (id: string) => void;
}

export function MenuItemCard({ item, onEdit, onDelete, onToggleAvailability }: MenuItemCardProps) {
    return (
        <Card className={cn("overflow-hidden flex flex-col h-full", !item.isAvailable && "opacity-70 grayscale")}>
            <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"}
                    alt={item.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                {!item.isAvailable && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold bg-black/70 px-3 py-1 rounded-full text-sm">Unavailable</span>
                    </div>
                )}
                <Badge className="absolute top-2 right-2 bg-black/50 backdrop-blur-md hover:bg-black/70">
                    {item.category}
                </Badge>
            </div>
            <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                    <span className="font-semibold text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-2 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 gap-2">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => onEdit(item)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => onDelete(item.id)}
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn("h-9 w-9", item.isAvailable ? "text-green-500 hover:text-green-600 hover:bg-green-100" : "text-gray-400 hover:text-gray-600")}
                    onClick={() => onToggleAvailability(item.id)}
                    title={item.isAvailable ? "Mark Unavailable" : "Mark Available"}
                >
                    <Power className="w-4 h-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
