import { NoteRepository } from "../repository/NoteRepository.tsx";
import { Note } from "../entity/Note.tsx";
import { CreateNoteRequest } from "../models/CreateNoteRequest.ts";
import axios from "axios";

const host = "http://localhost:8080";
const basePath = "/api";

export class NoteApi implements NoteRepository {
  async create(note: CreateNoteRequest): Promise<Note> {
    try {
      const response = await axios.post(`${host}${basePath}/notes`, note);

      return Promise.resolve(response.data);
    } catch (e) {
      console.error("#error", e);

      return Promise.reject(e);
    }
  }

  async getAll(): Promise<Note[]> {
    try {
      const response = await axios.get(`${host}${basePath}/notes`);
      console.log("#response", response.data);

      return Promise.resolve(response.data);
    } catch (e) {
      console.error("#error", e);

      return Promise.reject(e);
    }
  }
}
