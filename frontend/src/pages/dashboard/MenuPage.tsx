import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { MenuItemCard, MenuItem } from "../../components/menu/MenuItemCard";
import { MenuForm } from "../../components/menu/MenuForm";
import { Badge } from "../../components/ui/badge";

// Mock Data
const MOCK_ITEMS: MenuItem[] = [
    {
        id: "1",
        name: "Margherita Pizza",
        description: "Classic tomato sauce, mozzarella, and fresh basil.",
        price: 12.99,
        category: "Mains",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        isAvailable: true,
    },
    {
        id: "2",
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan, and caesar dressing.",
        price: 9.50,
        category: "Starters",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80",
        isAvailable: true,
    },
    {
        id: "3",
        name: "Tiramisu",
        description: "Coffee-flavoured Italian dessert.",
        price: 6.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
        isAvailable: false,
    },
];

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

export default function MenuPage() {
    const [items, setItems] = useState<MenuItem[]>(MOCK_ITEMS);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

    const filteredItems = items.filter((item) => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleAdd = (data: any) => {
        const newItem: MenuItem = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
            image: data.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        };
        setItems([...items, newItem]);
    };

    const handleEdit = (data: any) => {
        if (!editingItem) return;
        const updatedItems = items.map((item) =>
            item.id === editingItem.id ? { ...item, ...data } : item
        );
        setItems(updatedItems);
        setEditingItem(null);
    };

    const handleFormSubmit = (data: any) => {
        if (editingItem) {
            handleEdit(data);
        } else {
            handleAdd(data);
        }
        setIsFormOpen(false);
    };

    const openAddModal = () => {
        setEditingItem(null);
        setIsFormOpen(true);
    };

    const openEditModal = (item: MenuItem) => {
        setEditingItem(item);
        setIsFormOpen(true);
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this item?")) {
            setItems(items.filter(i => i.id !== id));
        }
    };

    const handleToggleAvailability = (id: string) => {
        setItems(items.map(i => i.id === id ? { ...i, isAvailable: !i.isAvailable } : i));
    };

    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Menu Management</h1>
                    <p className="text-muted-foreground">Manage your dishes, prices, and availability.</p>
                </div>
                <Button onClick={openAddModal} className="w-full md:w-auto">
                    <Plus className="w-4 h-4 mr-2" /> Add Item
                </Button>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search items..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">
                    {CATEGORIES.map(cat => (
                        <Badge
                            key={cat}
                            variant={selectedCategory === cat ? "default" : "outline"}
                            className="cursor-pointer whitespace-nowrap px-4 py-1.5 text-sm"
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
                {filteredItems.map((item) => (
                    <MenuItemCard
                        key={item.id}
                        item={item}
                        onEdit={openEditModal}
                        onDelete={handleDelete}
                        onToggleAvailability={handleToggleAvailability}
                    />
                ))}
                {filteredItems.length === 0 && (
                    <div className="col-span-full py-20 text-center text-muted-foreground">
                        No items found. Try adjusting your search or category.
                    </div>
                )}
            </div>

            {/* Form Dialog */}
            <MenuForm
                open={isFormOpen}
                onOpenChange={setIsFormOpen}
                onSubmit={handleFormSubmit}
                initialData={editingItem}
            />
        </div>
    );
}
