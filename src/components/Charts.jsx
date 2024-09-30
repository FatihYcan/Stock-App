import { Grid, Container } from "@mui/material";
import { AreaChart, Card, Title } from "@tremor/react";
import { useSelector } from "react-redux";

const valueFormatter = function (number) {
  return "$" + new Intl.NumberFormat("us").format(number).toString();
};

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const sortedSalesData = sales
  ?.slice()
  .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));

  const salesData = sortedSalesData?.map((item) => {
    console.log(item.updatedAt);
    return {
      date: new Date(item.updatedAt).toLocaleDateString("tr-TR"),
      amount: item.amount,
    };
  });



  // sortedSalesData?.forEach((item) => {
  //   // console.log(item.updatedAt);
  //   date: new Date(item.updatedAt).toLocaleDateString("tr-TR"),
  //   amount: item.amount,
  // });

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.updatedAt).toLocaleDateString("tr-TR"),
    amount: item.amount,
  }));

  return (
    <Container>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <Title>Total Sales (USD)</Title>
            <AreaChart
              className="h-80"
              data={salesData}
              index="date"
              categories={["amount"]}
              colors={["indigo"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Title>Total Purchases (USD)</Title>
            <AreaChart
              className="h-80"
              data={purchasesData}
              index="date"
              categories={["amount"]}
              colors={["cyan"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Charts;
