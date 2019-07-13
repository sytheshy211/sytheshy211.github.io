function HOCSINH(name, class1 , age) {
    this.NAME = name;
    this.AGE = age;
    this.CLASS = class1;
    this.FULL_INF = function() {
        return this.NAME + ' ' + this.CLASS +' ' + this.AGE;
    }
}
var thanhsang = new HOCSINH("Nguyen Thanh Sang" , "12/3", 18);
var sanginf = thanhsang.FULL_INF();
alert(sanginf);