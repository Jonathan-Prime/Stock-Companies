import { useState } from 'react';

interface FilterCriteria {
  ticker: string;
  priceMin: number;
  priceMax: number;
  yearMin: string;
  yearMax: string;
  sector: string;
}

export const useFilter = (data: any[]) => {
  const [filters, setFilters] = useState<FilterCriteria>({
    ticker: '',
    priceMin: 0,
    priceMax: Infinity,
    yearMin: '',
    yearMax: '',
    sector: ''
  });

  const [filteredData, setFilteredData] = useState(data);

  const applyFilters = () => {
    const filtered = data.filter((item) => {
      return (
        (filters.ticker ? item.ticker.toLowerCase().includes(filters.ticker.toLowerCase()) : true) &&
        (filters.priceMin ? item.price >= filters.priceMin : true) &&
        (filters.priceMax ? item.price <= filters.priceMax : true) &&
        (filters.yearMin ? item.year.includes(filters.yearMin) : true) &&
        (filters.yearMax ? item.year.includes(filters.yearMax) : true) &&
        (filters.sector ? item.sector.toLowerCase().includes(filters.sector.toLowerCase()) : true)
      );
    });
    setFilteredData(filtered);
  };

  const clearFilters = () => {
    setFilters({
      ticker: '',
      priceMin: 0,
      priceMax: Infinity,
      yearMin: '',
      yearMax: '',
      sector: ''
    });
    setFilteredData(data);
  };

  return {
    filters,
    setFilters,
    filteredData,
    applyFilters,
    clearFilters,
  };
};
