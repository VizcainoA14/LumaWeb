import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export default function DataOverview(props) {
  let data = props.data
    ? Object.keys(props.data).map(key => ({
        name: key,
        value: props.data[key]
      }))
    : [];

  return (
    <div>
      <Table
        className="bg-secondary-container dark:bg-secondary-dark rounded-md text-on-secondary-container dark:text-on-secondary-dark"
        style={{ fontFamily: "clash" }}
      >
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Parameter</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody style={{ fontFamily: "archivo" }}>
          {data.map(element =>
            <TableRow key={element.name}>
              <TableCell className="font-medium">
                {element.name}
              </TableCell>
              <TableCell>
                {element.value}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
