import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Trash2, Search, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Listing {
  id: string;
  website: string;
  keyword: string;
  password: string;
  status: "Submitted" | "Pending";
}

interface ListingsTableProps {
  listings: Listing[];
  onDelete: (id: string) => void;
}

export function ListingsTable({ listings, onDelete }: ListingsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListings = listings.filter(
    (listing) =>
      listing.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="hero" asChild>
          <Link href="/listings/add">
            <Plus className="w-4 h-4" />
            Add Listing
          </Link>
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-2xl shadow-card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/50">
                <TableHead className="font-heading font-semibold">Website</TableHead>
                <TableHead className="font-heading font-semibold">Keyword</TableHead>
                <TableHead className="font-heading font-semibold">Password</TableHead>
                <TableHead className="font-heading font-semibold">Status</TableHead>
                <TableHead className="font-heading font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredListings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                    No listings found
                  </TableCell>
                </TableRow>
              ) : (
                filteredListings.map((listing, index) => (
                  <motion.tr
                    key={listing.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="border-b border-border hover:bg-secondary/30 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground">{listing.website}</TableCell>
                    <TableCell className="text-muted-foreground max-w-xs truncate">{listing.keyword}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">••••••••</TableCell>
                    <TableCell>
                      <Badge variant={listing.status === "Submitted" ? "success" : "pending"}>
                        {listing.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/listings/edit/${listing.id}`}>
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onDelete(listing.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </section>
  );
}