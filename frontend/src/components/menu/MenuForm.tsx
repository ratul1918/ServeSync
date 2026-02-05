import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { MenuItem } from "./MenuItemCard";
import { useEffect } from "react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().min(5, "Description must be at least 5 characters"),
    price: z.coerce.number().min(0.01, "Price must be greater than 0"),
    category: z.string().min(1, "Please select a category"),
    image: z.string().url("Please enter a valid image URL").optional().or(z.literal("")),
    isAvailable: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

interface MenuFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (data: FormValues) => void;
    initialData?: MenuItem | null;
}

const CATEGORIES = ["Starters", "Mains", "Desserts", "Drinks", "Specials"];

export function MenuForm({ open, onOpenChange, onSubmit, initialData }: MenuFormProps) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            category: "",
            image: "",
            isAvailable: true,
        } as any,
    });

    useEffect(() => {
        if (open) {
            if (initialData) {
                form.reset({
                    name: initialData.name,
                    description: initialData.description,
                    price: initialData.price,
                    category: initialData.category,
                    image: initialData.image,
                    isAvailable: initialData.isAvailable,
                });
            } else {
                form.reset({
                    name: "",
                    description: "",
                    price: 0,
                    category: "",
                    image: "",
                    isAvailable: true,
                });
            }
        }
    }, [initialData, open, form]);

    const handleSubmit = (data: FormValues) => {
        onSubmit(data);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Item" : "Add New Item"}</DialogTitle>
                    <DialogDescription>
                        {initialData ? "Make changes to your menu item here." : "Add a new dish to your menu."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Margherita Pizza" {...form.register("name")} />
                        {form.formState.errors.name && <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="price">Price ($)</Label>
                        <Input id="price" type="number" step="0.01" {...form.register("price")} />
                        {form.formState.errors.price && <p className="text-xs text-red-500">{form.formState.errors.price.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                            onValueChange={(val: string) => form.setValue("category", val)}
                            value={form.watch("category") || undefined}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {CATEGORIES.map((cat) => (
                                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {form.formState.errors.category && <p className="text-xs text-red-500">{form.formState.errors.category.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Tomato sauce, mozzarella, and fresh basil." {...form.register("description")} />
                        {form.formState.errors.description && <p className="text-xs text-red-500">{form.formState.errors.description.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="image">Image URL</Label>
                        <Input id="image" placeholder="https://example.com/image.jpg" {...form.register("image")} />
                        {form.formState.errors.image && <p className="text-xs text-red-500">{form.formState.errors.image.message}</p>}
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
