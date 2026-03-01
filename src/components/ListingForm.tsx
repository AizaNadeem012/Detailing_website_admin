import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { Listing } from "./Listings";

interface ListingFormProps {
  listings: Listing[];
  onSave: (listing: Omit<Listing, "id"> & { id?: string }) => void;
}

export function ListingForm({ listings, onSave }: ListingFormProps) {
  const router = useRouter();
  const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    website: "",
    keyword: "",
    password: "",
    status: "Pending" as "Submitted" | "Pending",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const isEditing = Boolean(id);

  useEffect(() => {
    if (id) {
      const listing = listings.find((l) => l.id === id);
      if (listing) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormData({
          website: listing.website,
          keyword: listing.keyword,
          password: listing.password,
          status: listing.status,
        });
      }
    }
  }, [id, listings]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.website.trim()) {
      newErrors.website = "Website URL is required";
    } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/.test(formData.website)) {
      newErrors.website = "Please enter a valid website URL";
    }
    
    if (!formData.keyword.trim()) {
      newErrors.keyword = "Keyword is required";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    onSave({
      ...(id && { id }),
      ...formData,
    });

    toast({
      title: isEditing ? "Listing Updated" : "Listing Added",
      description: `${formData.website} has been ${isEditing ? "updated" : "added"} successfully.`,
    });

    router.push("/listings");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto"
    >
      <Button
        variant="ghost"
        onClick={() => router.push("/listings")}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Listings
      </Button>

      <div className="bg-card rounded-2xl p-8 shadow-card">
        <h2 className="text-h2 font-heading font-bold text-foreground mb-6">
          {isEditing ? "Edit Listing" : "Add New Listing"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="website">Website URL</Label>
            <Input
              id="website"
              type="text"
              placeholder="e.g., bizify.co.uk"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className={errors.website ? "border-destructive" : ""}
            />
            {errors.website && (
              <p className="text-sm text-destructive">{errors.website}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyword">Keyword</Label>
            <Input
              id="keyword"
              type="text"
              placeholder="e.g., mobile car detailing services near me"
              value={formData.keyword}
              onChange={(e) => setFormData({ ...formData, keyword: e.target.value })}
              className={errors.keyword ? "border-destructive" : ""}
            />
            {errors.keyword && (
              <p className="text-sm text-destructive">{errors.keyword}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={errors.password ? "border-destructive pr-10" : "pr-10"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value: "Submitted" | "Pending") => setFormData({ ...formData, status: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Submitted">Submitted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" variant="hero" className="w-full">
            {isEditing ? "Update Listing" : "Save Listing"}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}