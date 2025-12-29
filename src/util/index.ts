import { languages, type TextDocument } from "vscode";
import { selector } from "../features";

export * from "./getConfig";
export * from "./promptTemplate";

export function isIgnoreFile(document: TextDocument) {
	return languages.match(selector, document);
}
