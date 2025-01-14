import NoteCard from "./NoteCard.tsx";
import { Note } from "../../entity/Note.tsx";

type NoteListProps = {
  notes: Note[];
  onDeleteNote: (id: number) => void;
  onArchiveNote: (id: number) => void;
  onRestoreNote: (id: number) => void;
  onEditNote: (note: Note) => void;
};

function NoteList({
  notes,
  onDeleteNote,
  onArchiveNote,
  onRestoreNote,
  onEditNote,
}: NoteListProps) {
  return (
    <ol className="pt-5">
      {notes.map((note: Note) => (
        <li key={note.id} className="mb-1">
          <NoteCard
            note={note}
            onDelete={onDeleteNote}
            onArchive={onArchiveNote}
            onRestore={onRestoreNote}
            onEdit={onEditNote}
          />
        </li>
      ))}
    </ol>
  );
}

export default NoteList;
