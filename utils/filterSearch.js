const filterSearch = ({router, store, menu, category, sort, search}) => {
    const path = router.pathname;
    const query = router.query;

    if(store) query.store = store;
    if(menu) query.menu = menu;
    if(category) query.category = category;
    if(search) query.search = search;
    if(sort) query.sort = sort;

    router.push({
        pathname: path,
        query: query
    })
}

export default filterSearch