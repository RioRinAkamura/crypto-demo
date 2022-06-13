import { Table } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CryptoContext } from "../../Contexts/CryptoContext";
import { Coin } from "../../types";
import Container from "../Container";
import { Wrapper } from "../Navbar";

export function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CryptoList = () => {
  const { coins } = useContext(CryptoContext);
  const navigate = useNavigate();

  const onCoinClick = (record: Coin) => {
    navigate(`/coins/${record.uuid}`);
  };

  const columns = [
    {
      title: "Logo",
      dataIndex: "iconUrl",
      key: "iconUrl",
      width: "10%",
      // responsive: ["xs"],
      render: (text: string) => <img src={text} alt="" height={32} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      // responsive: ["md"],
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      width: "10%",
      // responsive: ["md"],
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      width: "20%",
      // responsive: ["md"],
      sorter: (a: any, b: any) => a.price - b.price,
      render: (text: number) => {
        const priceC = Number(text).toFixed(5);
        return <span>{priceC}</span>;
      },
    },
    {
      title: "Market Cap",
      dataIndex: "marketCap",
      key: "marketCap",
      width: "20%",
      sorter: (a: any, b: any) => a.marketCap - b.marketCap,
      render: (text: number) => <span>{numberWithCommas(text)}</span>,

      // responsive: ["md"],
    },
    {
      title: "Price Change",
      dataIndex: "change",
      key: "change",
      width: "20%",
      sorter: (a: any, b: any) => a.change - b.change,
      // responsive: ["md"],
    },
  ];

  return (
    <Wrapper>
      <Container>
        <TableStyle
          dataSource={coins}
          columns={columns}
          rowKey={(record: any) => record.uuid}
          onRow={(record: any) => {
            return {
              onClick: () => {
                onCoinClick(record);
              },
            };
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default CryptoList;

const TableStyle = styled(Table)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px;

  && tbody > tr:hover > td {
    background: #ffcb1071;
    cursor: pointer;
  }
`;
