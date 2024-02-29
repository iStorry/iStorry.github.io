import Link from "next/link";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "y/components/ui/table";

export default function UsesPage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-4xl font-bold">What iStorry uses</h1>
      <p>
        This is a list of tools, software, and hardware that I use on a daily basis. I will try to keep this list updated as much as
        possible.
      </p>
      <div className="grid grid-cols-1 gap-4">
        <h4 className="text-xl text-gray-500">Coming Soon .....</h4>
      </div>
      {/* <p>
        If you want to see more lists like this, check out{" "}
        <Link href={"https://uses.tech"} passHref>
          uses.tech.
        </Link>
      </p>
      <h1>Hardware</h1>
      <h4>Desktop</h4>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="border font-medium">CPU</TableCell>
            <TableCell className="border">Intel i7-13700KF</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">GPU</TableCell>
            <TableCell className="border">AMD Radeon 6700 XT</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">RAM</TableCell>
            <TableCell className="border">Corsair Vengeance 32GB</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">MOBO</TableCell>
            <TableCell className="border">Asus Strix STRIX Z790-A GAMING WIFI</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">PSU</TableCell>
            <TableCell className="border">Corsair RM850x</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">Cooler</TableCell>
            <TableCell className="border">Noctua NH-D15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">SSD</TableCell>
            <TableCell className="border">Samsung 970 EVO Plus 2TB M.2 NVMe</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">SSD</TableCell>
            <TableCell className="border">Samsung 960 EVO 250GB M.2 NVMe</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">SSD</TableCell>
            <TableCell className="border">Samsung 860 QVO 2TB 2.5&quot; SATA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">HDD</TableCell>
            <TableCell className="border">Seagate Barracuda 8TB 3.5&quot; SATA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">OS</TableCell>
            <TableCell className="border">Hackintosh / Windows 11 Pro</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h4>Laptop</h4>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="border font-medium">Model</TableCell>
            <TableCell className="border">MacBook Pro 13&quot; 2020</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">CPU</TableCell>
            <TableCell className="border">Intel i5 10th Gen</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">RAM</TableCell>
            <TableCell className="border">16GB</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">Storage</TableCell>
            <TableCell className="border">512GB SSD</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border font-medium">OS</TableCell>
            <TableCell className="border">macOS Monterey</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    </div>
  );
}
