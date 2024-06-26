"use strict";
// Modules ku use hote he ?
// jb bh hmm code likhte he to hamara code reusable , organized ho or maintained ho ye ku zaroori he ? 
// ye is liye zaroori he k hmm jb future me ksi project pr km krte  he to hamre sath pori aik team  hoti he or har bnde k liye ye asani honi chye k har line of code readable ho to module me ye facility hoti he  hmare pass alg alg kuch files bna lete he or wah se hmm  use export kr k apni main file me import kr  lte he ye hamara module ka concept he 
// agr hmm ase example le k hmara jo country he pakistan us ka petrol  ata he USA se to USA ne export kiya or hmm ne use import kiya isi trh agr pakistan kuch export kre ga for example hmm rice export kr rae he to dosri country use import kregi .
Object.defineProperty(exports, "__esModule", { value: true });
exports.newArray = exports.obj = exports.add = exports.oil = void 0;
exports.oil = "Oil";
var add = function (x, y) { return x + y; };
exports.add = add;
exports.obj = {
    name: "Asfa",
    class: "Thursday",
    Teacher: "Sir Hamza Alvi & Manaheel Jamil"
};
exports.newArray = ["Asfa", "Uzma", "Misbah", "Mutaiba"];
