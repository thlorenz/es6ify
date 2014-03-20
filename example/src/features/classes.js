class Foo {
    toString() {
        console.log('An instance of Foo says hi from its .toString()!')
    }
}

module.exports = function () {
    console.log(new Foo().toString());
};
