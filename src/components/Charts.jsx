import { Stack } from "@mui/material";
import { AreaChart, Card, Title } from "@tremor/react";
import { useSelector } from "react-redux";

const chartdata = [
  {
    date: "Jan 23",
    price: "",
  },
];

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    amount: item.amount,
  }));

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    amount: item.amount,
  }));

  return (
    <Stack gap={2} flexWrap="wrap" direction="row">
      <Card>
        <Title>Total Sales (USD)</Title>
        <AreaChart
          className="h-80"
          data={salesData}
          index="date"
          categories={["Amount"]}
          colors={["indigo"]}
          valueFormatter={valueFormatter}
        />
      </Card>
      <Card>
        <Title>Total Purchases (USD)</Title>
        <AreaChart
          className="h-80"
          data={purchasesData}
          index="date"
          categories={["Purchases"]}
          colors={["cyan"]}
          valueFormatter={valueFormatter}
        />
      </Card>
    </Stack>
  );
};

export default Charts;
