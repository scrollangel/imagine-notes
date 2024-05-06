import {NoteService} from "../services/NoteService.tsx";

export class ArchiveNote {
  private noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  execute(id: number) {
    return this.noteService.archiveNote(id);
  }
}