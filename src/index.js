let first = [
  { uuid: 2, name: "Darling" },
  { uuid: 3, name: "Cry-Baby" },
  { uuid: 4, name: "Snitch" },
  { uuid: 5, name: "Pawn" }
];
let second = [
  { uuid: 1, role: "admin" },
  { uuid: 2, role: "contributor" },
  { uuid: 3, role: "owner" },
  { uuid: 4, role: "contributor" }
];
function solution(first, second) {
  // initial variables
  var result = [];
  var i = 0;
  var j = 0;
  var curUuid = 0;
  var curName = null;
  var curRole = null;
  while (i < first.length && j < second.length) {
    // current id: the smaller one
    curUuid = first[i].uuid <= second[j].uuid ? first[i].uuid : second[j].uuid;
    curName = null;
    curRole = null;

    if (first[i].uuid === curUuid && second[j].uuid === curUuid) {
      // case 1: two arrays has same id as curUuid
      curName = first[i].name;
      curRole = second[j].role;
      i++;
      j++;
    } else if (first[i].uuid === curUuid) {
      // case 2: only first has curUuid
      curName = first[i].name;
      i++;
    } else {
      // case 3: only second has curUuid
      curRole = second[j].role;
      j++;
    }
    result.push({ uuid: curUuid, name: curName, role: curRole });
  }
  // check remainder
  while (i < first.length) {
    curUuid = first[i].uuid;
    curName = first[i].name;
    curRole = null;
    i++;
    result.push({ uuid: curUuid, name: curName, role: curRole });
  }

  while (j < second.length) {
    curUuid = second[j].uuid;
    curName = null;
    curRole = second[j].role;
    j++;
    result.push({ uuid: curUuid, name: curName, role: curRole });
  }

  return result;
}
console.log(solution(first, second));

//OUTPUT
//[
// {uuid:1, name: null, role: 'admin'},
// {uuid:2, name: 'Darling', role: 'contributor'},
// {uuid:3, name: 'Cry-Baby', role: 'owner'},
// {uuid:4, name: 'Snitch', role: 'contributor'},
// {uuid:5, name: 'Pawn', role: null}
//]
