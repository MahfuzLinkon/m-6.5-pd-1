const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let mxName = friends[0];
friends.forEach((friend) => {
    if (friend.length > mxName.length) {
        mxName = friend;
    }
});

console.log(mxName);
