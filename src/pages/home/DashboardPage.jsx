import { Table } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function DashboardPage() {
  const data = [
    {
      name: "T1",
      pv: 2400,
    },
    {
      name: "T2",
      pv: 1398,
    },
    {
      name: "T3",
      pv: 9800,
    },
    {
      name: "T4",
      pv: 3908,
    },
    {
      name: "T5",
      pv: 4800,
    },
    {
      name: "T6",
      pv: 3800,
    },
    {
      name: "T7",
      pv: 1300,
    },
    {
      name: "T8",
      pv: 2300,
    },
    {
      name: "T9",
      pv: 3300,
    },
    {
      name: "T10",
      pv: 6300,
    },
    {
      name: "T11",
      pv: 4120,
    },
    {
      name: "T12",
      pv: 1300,
    },
  ];

  const data2 = [
    {
      subject: "Compoter",
      A: 130,
    },
    {
      subject: "Screen",
      A: 98,
    },
    {
      subject: "Laptop",
      A: 86,
    },
    {
      subject: "Mouse",
      A: 99,
    },
    {
      subject: "Earphone",
      A: 99,
    },
    {
      subject: "Keyborad",
      A: 99,
    },
  ];
  const dataTable = [
    {
      id: 1,
      name: "Nguyen Minh Hieu",
      order: 2000000,
      products: 2,
      payments: "VNPAY",
    },
    {
      id: 2,
      name: "Nguyen Minh Hoang",
      order: 3000000,
      products: 2,
      payments: "Payment on delivery",
    },
    {
      id: 3,
      name: "Nguyen Minh Long",
      order: 2000000,
      products: 2,
      payments: "VNPAY",
    },
    {
      id: 4,
      name: "Nguyen Minh Kien",
      order: 2000000,
      products: 2,
      payments: "VNPAY",
    },
  ];

  const dataTable2 = [
    {
      id: 1,
      name: "Nguyen Minh Hieu",
      total: 5000000,
    },
    {
      id: 2,
      name: "Nguyen Minh Hoang",
      total: 3000000,
    },
    {
      id: 3,
      name: "Nguyen Minh Long",
      total: 2000000,
    },
    {
      id: 4,
      name: "Nguyen Minh Kien",
      total: 2000000,
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
      width: 900,
    },
    {
      title: "Order value",
      dataIndex: "order",
      key: "order",
      width: 500,
      render: (_, record) => <>{record.order.toLocaleString("vi-VN")}</>,
    },
    {
      title: "Quantity Products",
      dataIndex: "products",
      key: "order",
      width: 400,
    },
    {
      title: "Payments",
      dataIndex: "payments",
      key: "Payments",
      width: 500,
    },
  ];
  const columns2 = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
      width: 700,
    },
    {
      title: "Total payment",
      dataIndex: "total",
      key: "toal",
      width: 400,
      render: (_, record) => <>{record.total.toLocaleString("vi-VN")}</>,
    },
  ];
  return (
    <div className="dashborad-page container-fluid">
      <div className="row">
        <div className="col-lg-8 d-flex align-items-strech">
          <div
            className="card w-100"
            style={{
              border: "none",
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            }}
          >
            <div className="card-body">
              <div class="d-sm-flex d-block align-items-center justify-content-between mb-5">
                <div class="mb-3 mb-sm-0">
                  <h5 class="card-title fw-semibold">
                    Sales Overview (Đang Fix Cứng Trang Dashborad)
                  </h5>
                </div>
                <div>
                  <select class="form-select">
                    <option value="1">2024</option>
                    <option value="2">2025</option>
                    <option value="3">2026</option>
                    <option value="4">2027</option>
                  </select>
                </div>
              </div>
              <div>
                <BarChart width={820} height={350} data={data} barSize={30}>
                  <CartesianGrid strokeDasharray="1 1" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div>
              <div className="col-lg-12">
                <div
                  className="card overflow-hidden"
                  style={{
                    border: "none",
                    boxShadow:
                      "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                  }}
                >
                  <div className="card-body p-4">
                    <h5 class="card-title mb-3 fw-semibold">
                      Statistics of sold products by category
                    </h5>
                    <div className="row align-items-center">
                      <div className="col-12">
                        <ResponsiveContainer width={350} height={400}>
                          <RadarChart
                            cx="50%"
                            cy="50%"
                            outerRadius="60%"
                            data={data2}
                          >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <Radar
                              name="Category"
                              dataKey="A"
                              stroke="#8884d8"
                              fill="#8884d8"
                              fillOpacity={0.6}
                            />
                            <Legend />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-8">
          <div
            className="card w-100"
            style={{
              border: "none",
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            }}
          >
            <div className="card-body">
              <div class="mb-3 mb-sm-0">
                <h5 class="card-title fw-semibold">Recent Transactions</h5>
                <Table
                  columns={columns}
                  dataSource={dataTable}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="card w-100"
            style={{
              border: "none",
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            }}
          >
            <div className="card-body">
              <div class="mb-3 mb-sm-0">
                <h5 class="card-title fw-semibold">Top Client</h5>
                <Table
                  columns={columns2}
                  dataSource={dataTable2}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
