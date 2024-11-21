"use client";
import "./css_files/ey_features_font_edit.css";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../components/ui/chart";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";

const financialData = [
  // Array of financial data
  { month: "Jan", husbandIncome: 3000, wifeIncome: 2000, husbandExpenditure: 2500, wifeExpenditure: 1500, budget: 4500, advisedPath: 4200 },
  { month: "Feb", husbandIncome: 3100, wifeIncome: 2100, husbandExpenditure: 2600, wifeExpenditure: 1500, budget: 4500, advisedPath: 4100 },
  { month: "Mar", husbandIncome: 3000, wifeIncome: 2100, husbandExpenditure: 2700, wifeExpenditure: 1600, budget: 4500, advisedPath: 4000 },
  { month: "Apr", husbandIncome: 3200, wifeIncome: 2100, husbandExpenditure: 2600, wifeExpenditure: 1600, budget: 4500, advisedPath: 3900 },
  { month: "May", husbandIncome: 3200, wifeIncome: 2200, husbandExpenditure: 2500, wifeExpenditure: 1500, budget: 4500, advisedPath: 3800 },
  { month: "Jun", husbandIncome: 3300, wifeIncome: 2200, husbandExpenditure: 2400, wifeExpenditure: 1500, budget: 4500, advisedPath: 3700 },
  { month: "Jul", husbandIncome: 3300, wifeIncome: 2300, husbandExpenditure: 2300, wifeExpenditure: 1500, budget: 4500, advisedPath: 3600 },
  { month: "Aug", husbandIncome: 3400, wifeIncome: 2300, husbandExpenditure: 2200, wifeExpenditure: 1500, budget: 4500, advisedPath: 3500 },
  { month: "Sep", husbandIncome: 3400, wifeIncome: 2400, husbandExpenditure: 2100, wifeExpenditure: 1500, budget: 4500, advisedPath: 3400 },
  { month: "Oct", husbandIncome: 3500, wifeIncome: 2400, husbandExpenditure: 2000, wifeExpenditure: 1500, budget: 4500, advisedPath: 3300 },
  { month: "Nov", husbandIncome: 3500, wifeIncome: 2500, husbandExpenditure: 1900, wifeExpenditure: 1500, budget: 4500, advisedPath: 3200 },
  { month: "Dec", husbandIncome: 3600, wifeIncome: 2500, husbandExpenditure: 1800, wifeExpenditure: 1500, budget: 4500, advisedPath: 3100 },
];

const chartConfig = {
  husbandIncome: { label: "Husband's Income", color: "hsl(var(--chart-1))" },
  wifeIncome: { label: "Wife's Income", color: "hsl(var(--chart-2))" },
  husbandExpenditure: { label: "Husband's Expenditure", color: "hsl(var(--chart-3))" },
  wifeExpenditure: { label: "Wife's Expenditure", color: "hsl(var(--chart-4))" },
  budget: { label: "Budget", color: "hsl(var(--chart-5))" },
  advisedPath: { label: "Advised Path", color: "hsl(var(--chart-6))" },
};

export default function PartnerConnect() {
  const [visibleLines, setVisibleLines] = useState({
    husbandIncome: true,
    wifeIncome: true,
    husbandExpenditure: true,
    wifeExpenditure: true,
    budget: true,
    advisedPath: true,
  });

  const toggleLine = (line) => {
    setVisibleLines((prev) => ({ ...prev, [line]: !prev[line] }));
    
  };

  return (
    <>
    <h2 className="text-3xl font-bold tracking-tight ey_title_font_color_and_family m-5">Partner Connect</h2>
    <Card className="w-full max-w-4xl ey_desription_font_color_and_family">
      <CardHeader>
        <CardTitle>Achieve common goals</CardTitle>
        <CardDescription>
          Tracking income, expenditure, budget, and advised path for shared goals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-4">
          {Object.entries(chartConfig).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={visibleLines[key]}
                onChange={() => toggleLine(key)}
              />
              <Label htmlFor={key} className="text-sm font-medium">
                {value.label}
              </Label>
            </div>
          ))}
        </div>
        <ChartContainer config={chartConfig} className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={financialData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              {Object.entries(chartConfig).map(
                ([key, value]) =>
                  visibleLines[key] && (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={value.color}
                      strokeWidth={2}
                    />
                  )
              )}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              On track to meet financial goals <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </>
  );
}
