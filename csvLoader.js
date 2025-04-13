async function loadUserDataFromCSV(userId) {
    const response = await fetch('users.csv');
    const text = await response.text();

    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const user = {};
        headers.forEach((key, index) => {
            user[key.trim()] = values[index].trim();
        });

        if (user.id === userId) {
            return user;
        }
    }

    return null;
}
