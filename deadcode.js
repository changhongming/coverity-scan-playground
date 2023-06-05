const instance = {
    searchQuerySet(q) {
        if (!Array.isArray(q?.a)) {
            return '1';
        }
        const str = q?.a[0];

        if (typeof str !== 'string') return '2';

        return '3';
    }
}

function test7a(p1) {
    if(p1 == null) {
        return;
    }
    // In JavaScript null == undefined.
    if(p1 == undefined) {
        // Defect: dead code
        return;
    }
    safe_process(p1);
}

function test7b(p1) {
    if(p1 === null) {
        return;
    }
    // But null !== undefined.
    if(p1 === undefined) {
        // No defect
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
  if(isRoot) {
    // Defect: dead code
    return true;
  }
}
