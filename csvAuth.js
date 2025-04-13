export async function authenticate(username, password) {
    const response = await fetch('auth.csv');
    const text = await response.text();

    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const entry = {};
        headers.forEach((key, index) => {
            entry[key.trim()] = values[index].trim();
        });

        if (entry.username === username && entry.password === password) {
            return entry.id;  // 認証成功 → IDを返す
        }
    }

    return null; // 認証失敗
}
