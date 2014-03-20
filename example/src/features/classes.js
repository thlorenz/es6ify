class Foo {
    toString() {
        return 'An instance of Foo says hi from its .toString()!';
    }
}

module.exports = function () {
    console.log(new Foo().toString());
};
