"use client";

import "./css_files/ey_features_font_edit.css"
// import * as React from "react";
import {
  AlertCircle,
  DollarSign,
  Download,
  Wallet,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Pie,
  PieChart,
} from "recharts";

import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

// Mock data (expanded)
const incomeData = [
  { month: "Jan", income: 5000, expenditure: 4000 },
  { month: "Feb", income: 5200, expenditure: 4100 },
  { month: "Mar", income: 5100, expenditure: 4200 },
  { month: "Apr", income: 5300, expenditure: 4000 },
  { month: "May", income: 5400, expenditure: 4300 },
  { month: "Jun", income: 5600, expenditure: 4400 },
];

const inflationData = [
  { year: 2020, rate: 1.4 },
  { year: 2021, rate: 7.0 },
  { year: 2022, rate: 6.5 },
  { year: 2023, rate: 3.4 },
  { year: 2024, rate: 2.8 },
];

const investmentData = [
  { name: "Stocks", value: 45 },
  { name: "Bonds", value: 30 },
  { name: "Real Estate", value: 15 },
  { name: "Crypto", value: 10 },
];

const goalData = [
  { name: "Emergency Fund", current: 8000, target: 10000 },
  { name: "Vacation", current: 3000, target: 5000 },
  { name: "New Car", current: 15000, target: 30000 },
];

const categorySpendingData = [
  { name: "Housing", value: 1500 },
  { name: "Food", value: 500 },
  { name: "Transportation", value: 300 },
  { name: "Utilities", value: 200 },
  { name: "Entertainment", value: 150 },
  { name: "Healthcare", value: 100 },
  { name: "Other", value: 250 },
];

const recentTransactions = [
  {
    date: "2023-06-01",
    description: "Grocery Store",
    amount: -75.5,
    category: "Food",
  },
  {
    date: "2023-06-02",
    description: "Electric Bill",
    amount: -120.0,
    category: "Utilities",
  },
  {
    date: "2023-06-03",
    description: "Salary Deposit",
    amount: 3000.0,
    category: "Income",
  },
  {
    date: "2023-06-04",
    description: "Restaurant Dinner",
    amount: -85.0,
    category: "Food",
  },
  {
    date: "2023-06-05",
    description: "Gas Station",
    amount: -40.0,
    category: "Transportation",
  },
];

const notifications = [
  {
    id: 1,
    type: "alert",
    message:
      "Your emergency fund is 80% complete. Consider allocating more to reach your target.",
  },
  {
    id: 2,
    type: "info",
    message: "New investment opportunity: Green Energy ETF now available.",
  },
  {
    id: 3,
    type: "warning",
    message:
      "Unusual spending detected in 'Entertainment' category this month.",
  },
  {
    id: 4,
    type: "success",
    message:
      "Congratulations! You've reached your savings goal for 'Vacation'.",
  },
];

export default function FinancialDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight ey_title_font_color_and_family">Financial Dashboard</h2>
        <div className="flex items-center space-x-2 ey_btn_font_color_and_family">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4 ey_desription_font_color_and_family">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        {/* Remaining content */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$31,600</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$25,000</div>
                <p className="text-xs text-muted-foreground">+4% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Savings</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$6,600</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Inflation Rate</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.8%</div>
                <p className="text-xs text-muted-foreground">-0.6% from last year</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Income vs Expenditure</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ChartContainer config={{
                  income: {
                    label: "Income",
                    color: "hsl(var(--chart-1))",
                  },
                  expenditure: {
                    label: "Expenditure",
                    color: "hsl(var(--chart-2))",
                  },
                }} className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={incomeData}>
                      <Line type="monotone" dataKey="income" stroke="var(--color-income)" strokeWidth={2} />
                      <Line type="monotone" dataKey="expenditure" stroke="var(--color-expenditure)" strokeWidth={2} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Investment Portfolio</CardTitle>
                <CardDescription>Your current investment allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  stocks: {
                    label: "Stocks",
                    color: "hsl(var(--chart-1))",
                  },
                  bonds: {
                    label: "Bonds",
                    color: "hsl(var(--chart-2))",
                  },
                  realEstate: {
                    label: "Real Estate",
                    color: "hsl(var(--chart-3))",
                  },
                  crypto: {
                    label: "Crypto",
                    color: "hsl(var(--chart-4))",
                  },
                }} className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={investmentData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="var(--color-stocks)"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Inflation Trend</CardTitle>
                <CardDescription>Historical and projected inflation rates</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ChartContainer config={{
                  rate: {
                    label: "Inflation Rate",
                    color: "hsl(var(--chart-1))",
                  },
                }} className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={inflationData}>
                      <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" strokeWidth={2} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Financial Goals</CardTitle>
                <CardDescription>Track your progress towards your goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {goalData.map((goal) => (
                  <div key={goal.name} className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm font-medium">{goal.name}</span>
                      <span className="ml-auto text-sm text-muted-foreground">
                        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Spending by Category</CardTitle>
                <CardDescription>Your expenditure breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  category: {
                    label: "Category",
                    color: "hsl(var(--chart-1))",
                  },
                }} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categorySpendingData}>
                      <Bar dataKey="value" fill="var(--color-category)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Savings Rate</CardTitle>
                <CardDescription>Your savings as a percentage of income</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">20.9%</div>
                <ChartContainer config={{
                  savings: {
                    label: "Savings Rate",
                    color: "hsl(var(--chart-1))",
                  },
                }} className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={incomeData.map(item => ({ ...item, savingsRate: ((item.income - item.expenditure) / item.income) * 100 }))}>
                      <Line type="monotone" dataKey="savingsRate" stroke="var(--color-savings)" strokeWidth={2} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Investment Performance</CardTitle>
              <CardDescription>Year-to-date returns by asset class</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                stocks: {
                  label: "Stocks",
                  color: "hsl(var(--chart-1))",
                },
                bonds: {
                  label: "Bonds",
                  color: "hsl(var(--chart-2))",
                },
                realEstate: {
                  label: "Real Estate",
                  color: "hsl(var(--chart-3))",
                },
                crypto: {
                  label: "Crypto",
                  color: "hsl(var(--chart-4))",
                },
              }} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: "Stocks", return: 7.5 },
                    { name: "Bonds", return: 2.1 },
                    { name: "Real Estate", return: 4.3 },
                    { name: "Crypto", return: 15.2 },
                  ]}>
                    <Bar dataKey="return" fill="var(--color-stocks)" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Financial Summary</CardTitle>
              <CardDescription>Overview of your finances for the current month</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Income</TableCell>
                    <TableCell>$5,600</TableCell>
                    <TableCell className="text-green-600">+3.6%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Expenses</TableCell>
                    <TableCell>$4,400</TableCell>
                    <TableCell className="text-red-600">+2.3%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Savings</TableCell>
                    <TableCell>$1,200</TableCell>
                    <TableCell className="text-green-600">+8.1%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Investments</TableCell>
                    <TableCell>$800</TableCell>
                    <TableCell className="text-green-600">+5.4%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Category</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className={transaction.amount < 0 ? "text-red-600" : "text-green-600"}>
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </TableCell>
                      <TableCell>{transaction.category}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          {notifications.map((notification) => (
            <Alert key={notification.id} variant={notification.type === "alert" ? "destructive" : "default"}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{notification.type === "alert" ? "Alert" : "Notification"}</AlertTitle>
              <AlertDescription>{notification.message}</AlertDescription>
            </Alert>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
