import { CreateCategory } from "@/components/forms/create-category";
import { PageTitle } from "@/components/page-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";

export default async function CategoriesPage() {
  const categories = await db.category.findMany();

  return (
    <div className="space-y-5">
      <div className=" flex items-start justify-between">
        <PageTitle
          title="Categories"
          description="categories description list page"
        />
        <CreateCategory />
      </div>

      <div className="border overflow-hidden rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">#</TableHead>
              <TableHead className="w-[350px]">Nome</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category, idx) => (
              <TableRow key={category.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{category.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
