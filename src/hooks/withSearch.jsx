import { useState } from "react";

const withSearch = Component => {

    const SearchComponent = () => {

        const [search, setSearch] = useState("");

        return (
            <>
                <input type="search" className="form-control w-50" value={search} onChange={e => setSearch(e.target.value)} />
                <Component search={search} />
            </>
        )
    }

    return SearchComponent;
}

export default withSearch