const instance = {
    searchQuerySet(q) {
        if (!Array.isArray(q?.a)) {
            return '1';
        }
        const str = q?.a[0];

        if (typeof str !== 'string') return '2';

        return '3';
    },
    testDeadCode(q) {
        if (!Array.isArray(q?.a)) {
            return '1';
        }
        if (q?.a === undefined) return 'imposable';
    
        const str = q?.a[0];
    
        if (typeof str !== 'string') return '2';
    
        return '3';
    },
}

function earlyReturn(a) {
    if (a == null) {
        return 'null';
    }

    if (a.prop.prop2) {
        return a.prop;
    }
    return a.default;
}

function nestedCondition(a) {
    if (a != null) {
        if (a.prop.prop2) {
            return a.prop;
        }
        return a.default;
    } else {
        return 'null';
    }
}

function earlyReturnOC(a) {
    if (a == null) {
        return 'null';
    }

    if (a?.prop?.prop2) {
        return a.prop;
    }
    return a.default;
}

function nestedConditionOC(a) {
    if (a != null) {
        if (a?.prop?.prop2) {
            return a.prop;
        }
        return a.default;
    } else {
        return 'null';
    }
}

function earlyReturnWithoutNullCheckOC(a) {
    if (a?.prop?.prop2) {
        return a.prop;
    }
    return a.default;
}



function testDeadCode(q) {
    if (!Array.isArray(q?.a)) {
        return '1';
    }
    // Did't detect dead code in coverity
    if (q?.a === undefined) return 'imposable';

    const str = q?.a[0];

    if (typeof str !== 'string') return '2';

    return '3';
}

function testDeadCode2(q) {
    if (!Number.isNaN(q)) {
        return '1';
    }

    if (q == null) return 'imposable';

    return '2'
}

function testDeadCode3(q) {
    if (!(typeof q === 'string')) {
        return '1';
    }
    if (q == null) return 'imposable';

    return '2'
}

function test7a(p1) {
    if(p1 == null) {
        return;
    }

    safe_process(p1);
}

function adapted_angular_code_example(parentElement) {
  var isRoot = isMatchingElement(parentElement, $rootElement);
  var state = isRoot ? rootAnimateState : parentElement.data(NG_ANIMATE_STATE);
  var result = state && (!!state.disabled || state.totalActive > 0);
  if(isRoot || result) {
    return result;
  }
}
