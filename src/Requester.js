export default class Requester {
  static async postJounral(newJournal) {
    const fetchOptions = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJournal),
    };
    const reponse = await fetch("http://localhost:5500/journals", fetchOptions);
  }
}
