class NotesStore {
  constructor() {
    this.completed = [];
    this.active = [];
    this.others = [];
  }
  addNote(state, name) {
    if (name === '') throw new Error('Name cannot be empty');

    if (state === 'active') {
      this.active.push(name);
    } else if (state === 'completed') {
      this.completed.push(name);
    } else if (state === 'others') {
      this.others.push(name);
    } else throw new Error(`Invalid state ${state}`);
  }
  getNotes(state) {
    if (!state) throw new Error(`Invalid state ${state}`);
    
    if (state === 'active') {
      return this.active;
    } else if (state === 'completed') {
      return this.completed;
    } else if (state === 'others') {
      return this.others;
    } else throw new Error(`Invalid state ${state}`);
  }
}