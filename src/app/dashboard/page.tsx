"use client";

import { Table, Input } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

interface SearchFilter {
  country: string;
  name: string;
}

export default function Dashboard() {
  const [filteredData, setFilteredData] = useState<University[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<SearchFilter>({
    country: '',
    name: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<University[]>(
          `http://universities.hipolabs.com/search?country=${search.country}&name=${search.name}`
        );
        setFilteredData(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Website',
      dataIndex: 'web_pages',
      key: 'website',
      render: (webPages: string[]) => (
        <a href={webPages[0]} target="_blank" rel="noreferrer">
          {webPages[0]}
        </a>
      ),
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: "#ffffff", color: "#000000" }}>
      <h1>University List</h1>
      <div style={{display:"flex", flexDirection:"column"}}>
      <Input
        placeholder="Filter by name"
        name="name"
        onChange={handleSearch}
        style={{ width: 300, marginBottom: 20 }}
      />
      <Input
        placeholder="Filter by country"
        name="country"
        onChange={handleSearch}
        style={{ width: 300, marginBottom: 20 }}
      />
      </div>
     
      <Table
        columns={columns}
        dataSource={filteredData}
        loading={loading}
        rowKey="name"
      />
    </div>
  );
}
