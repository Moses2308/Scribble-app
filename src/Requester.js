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

  static async getJournals() {
    const response = await fetch("http://localhost:5500/journals");
    const data = await response.json();
    return data;
  }

  static async getJournalbyId(journalId) {
    const response = await fetch(`http://localhost:5500/journals/${journalId}`);
    const data = await response.json();
    return data;
  }

  static async patchJournal(dataObject, journalId) {
    const fetchOptions = {
      method: "PATCH",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    };
    await fetch(`http://localhost:5500/journals/${journalId}`, fetchOptions);
  }

  static async deleteJournal(journalId) {
    const fetchOptions = {
      method: "DELETE",
    };
    await fetch(`http://localhost:5500/journals/${journalId}`, fetchOptions);
  }
}
