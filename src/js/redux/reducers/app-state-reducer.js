export function test(test = false,action) {

    let {type} = action;

    if (type === "TEST_TRUE") {
        return true;
    }

    if (type === "TEST_FALSE") {
        return false;
    }

    return test;
}