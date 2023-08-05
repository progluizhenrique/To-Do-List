function Search ({ search, setSearch }) {
    return (
        <input className="pesquisa" type="text" placeholder="Pesquisar" value={search} 
        onChange={(e) => setSearch(e.target.value)} />
    )   
}

export default Search