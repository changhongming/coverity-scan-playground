const instance = {
    searchQuerySet() {
        const { q } = this.queryParam;
        if (!Array.isArray(q?.a)) {
            return '1';
        }
        const str = q?.a[0];

        if (typeof str !== 'string') return '2';

        return '3';
    }
}