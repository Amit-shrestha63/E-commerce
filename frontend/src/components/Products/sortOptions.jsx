import {useSearchParams} from "react-router-dom";
const sortOptions = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        searchParams.set("sortBy", sortBy);
        setSearchParams(searchParams);
    }
  return (
    <div className="flex items-center justify-end mb-4">
      <select id="sort" onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="priceAsc">Price low to high</option>
        <option value="priceDec">Price high to low </option>
        <option value="popularity">Popularity</option>
        
      </select>
    </div>
  );
};

export default sortOptions;
