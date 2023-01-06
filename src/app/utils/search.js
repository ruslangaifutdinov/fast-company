export function searchUser(users,filter, search, selectedProf) {
    switch (filter) {
    case "search":
        return users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase().trim())
        );
    case "profession":
        return users.filter(
            (user) => user.profession.name === selectedProf.name
        );
    default:
        return users;
    }
}
