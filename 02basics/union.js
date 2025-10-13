"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "55";
score = true;
var parth = { name: "parth", id: 123 };
parth = { username: "parth123", id: 134 };
function getDbId(id) {
    console.log("Db id is ".concat(id));
}
getDbId(3);
getDbId("3");
function getDbID(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data = [1, "2", 3, "4", false];
var data1 = [1, "2", 3, "4", false]; //dont use this
var pie = 3.14; //like a const
var status;
status = "sucess";
