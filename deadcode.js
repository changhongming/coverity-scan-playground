const instance = {
    queryParam: {
        q: null,
    },
    searchQuerySet() {
        const { q } = this.queryParam;
        if (!Array.isArray(q?.a)) {
            return;
        }
        const str = q?.a[0];

        if (typeof str !== 'string') return;

        return;
    }
}