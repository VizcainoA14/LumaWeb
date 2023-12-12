import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export default function DataOverview() {
  return (
    <div>
      <Table className="bg-secondary-container rounded-md text-on-secondary-container" style={{fontFamily: 'clash'}}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Parameter</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody style={{fontFamily: 'archivo'}}>
          <TableRow>
            <TableCell className="font-medium">Entropy</TableCell>
            <TableCell>38.6</TableCell>
            <TableCell>measure of the degree of randomness in the image.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
