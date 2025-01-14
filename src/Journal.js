export default class Journal {
  constructor(author, name) {
    this.author = author;
    this.name = name;
    this.entries = [];
    this.imgUrl =
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  setImgUrl(newImgUrl) {
    this.imgUrl = newImgUrl;
  }
  copyEntries(oriJournal) {
    this.entries = oriJournal.entries;
  }
}
