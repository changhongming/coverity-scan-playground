var _ = {
    isObject(obj) {
        return obj === Object(obj);
    },
    mapObject(obj, cb) {
        return Object.keys(obj).reduce((acc, key) => {
            acc[key] = cb(obj[key]);
            return acc;
        }, {});
    }
}

function getUrlWithQuery(url, authData) {
    if (authData?.length > 0) {
        const params = authData.map(item => `${item.key}=${item.value}`).join('&');
        return `${url}?${params}`;
    }
    return url;
}

function main(...args) {
    const [arg0] = args;
    
    if (arg0?.a?.b) {
        console.log('arg0?.a?.b');
        return;
    }

    if (arg0?.a?.b !== undefined) {
        console.log('arg0?.a?.b !== undefined');
        return;
    }
}

function searchContextWithAuthQuery(uri, data, options, urlOpts) {
    const combineOpts = { ...options };
    combineOpts.success = (data) => {
        const authData = [];
        if (data?.auth_params) {
            const authParams = data.auth_params;
            for (const key in authParams) {
                authData.push({
                    key,
                    value: authParams[key]
                });
            }

            function transformCb(val) {
                if (_.isObject(val)) {
                    return _.mapObject(val, transformCb);
                }
                return getUrlWithQuery(val, authData);
            }

            if (data?.items?.length > 0) {
                data.items = data.items.map(item => {
                    item.actions = _.mapObject(item.actions, transformCb);
                    item.preview = _.mapObject(item.preview, transformCb);
                    return item;
                });
            }
        }

        return options?.success(data);
    };
    return this.api(uri, data, combineOpts, urlOpts);
}

main();
